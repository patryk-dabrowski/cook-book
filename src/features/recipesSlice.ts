import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {normalize} from 'normalizr';
import {RootState} from '../rootReducer';
import {Recipe} from '../types';
import {articleEntity} from '../schemas';
import * as api from '../services/firebase';

export const recipesAdapter = createEntityAdapter<Recipe>();

export const fetchRecipes = createAsyncThunk('recipes/fetchAll', async () => {
  const recipes = await api.fetchRecipes();
  const normalized = normalize(recipes, [articleEntity]);

  return normalized.entities;
});

export const fetchCommentsByRecipeId = createAsyncThunk(
  'recipes/fetchCommentsByRecipeId',
  async ({recipeId}: {recipeId: string}) => {
    const comments = await api.fetchCommentsByRecipeId(recipeId);

    return {id: recipeId, changes: {comments}};
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
