import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {RootState} from '../rootReducer';
import {Recipe} from '../types';
import fakeAPI from '../services/fakeAPI';
import {normalize} from 'normalizr';
import {articleEntity} from '../schemas';

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
