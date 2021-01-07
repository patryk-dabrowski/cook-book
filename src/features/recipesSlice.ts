import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {normalize} from 'normalizr';
import firestore from '@react-native-firebase/firestore';
import {RootState} from '../rootReducer';
import {Comment, Recipe} from '../types';
import {articleEntity} from '../schemas';

export const recipesAdapter = createEntityAdapter<Recipe>();

export const fetchRecipes = createAsyncThunk('recipes/fetchAll', async () => {
  const recipes = await firestore().collection('Recipes').get();
  const data: Recipe[] = [];

  recipes.forEach((recipe) => {
    const {
      created_at,
      image,
      title,
      description,
      ingredients,
      score,
      difficulty,
      preparation_time,
      author,
    } = recipe.data();

    data.push({
      id: recipe.id,
      created_at: new Date(created_at.seconds * 1000).toISOString(),
      image,
      title,
      description,
      ingredients,
      score,
      difficulty,
      preparation_time,
      author,
    });
  });
  const normalized = normalize(data, [articleEntity]);

  return normalized.entities;
});

export const fetchCommentsByRecipeId = createAsyncThunk(
  'recipes/fetchCommentsByRecipeId',
  async ({recipeId}: {recipeId: string}) => {
    const recipeDoc = firestore().collection('Recipes').doc(recipeId);
    const comments = await firestore()
      .collection('Comments')
      .where('recipe', '==', recipeDoc)
      .get();
    const data: Comment[] = [];

    comments.forEach((comment) => {
      const {created_at, recipe, author, content} = comment.data();
      data.push({
        id: comment.id,
        created_at: new Date(created_at.seconds * 1000).toISOString(),
        recipe: recipe.id,
        author,
        content,
      });
    });

    return {id: recipeId, changes: {comments: data}};
  },
);

export const slice = createSlice({
  name: 'recipes',
  initialState: recipesAdapter.getInitialState({loading: false}),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchRecipes.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        recipesAdapter.setAll(state, action.payload.recipes);
      },
    );
    builder.addCase(
      fetchCommentsByRecipeId.fulfilled,
      (state, action: PayloadAction<any>) => {
        recipesAdapter.updateOne(state, action.payload);
      },
    );
  },
});

export default slice.reducer;

export const {
  selectAll: selectAllRecipes,
  selectById: selectByIdRecipe,
} = recipesAdapter.getSelectors<RootState>((state) => state.recipes);
export const loadingRecipe = createSelector(
  (state: RootState) => state.recipes,
  (recipes) => recipes.loading,
);
