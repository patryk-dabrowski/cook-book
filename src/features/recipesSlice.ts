import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {RootState} from '../rootReducer';
import {Recipe} from '../types';
import fakeAPI from '../services/fakeAPI';
import {normalize, schema} from 'normalizr';

// Define normalizr entity schemas
export const userEntity = new schema.Entity('users');
export const commentEntity = new schema.Entity('comments', {
  author: userEntity,
});
export const articleEntity = new schema.Entity('recipes', {
  author: userEntity,
  comments: [commentEntity],
});

export const recipesAdapter = createEntityAdapter<Recipe>();

export const fetchRecipes = createAsyncThunk('recipes/fetchAll', async () => {
  const response = await fakeAPI.recipes.list();
  const normalized = normalize(response.data, [articleEntity]);
  return normalized.entities;
});

export const slice = createSlice({
  name: 'recipes',
  initialState: recipesAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchRecipes.fulfilled,
      (state, action: PayloadAction<any>) => {
        recipesAdapter.upsertMany(state, action.payload.recipes);
      },
    );
  },
});

export default slice.reducer;

export const {
  selectAll: selectAllRecipes,
  selectById: selectByIdRecipe,
} = recipesAdapter.getSelectors<RootState>((state) => state.recipes);
