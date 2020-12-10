import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {fetchRecipes} from './recipesSlice';
import {Comment} from '../types';

const commentsAdapter = createEntityAdapter<Comment>();

export const slice = createSlice({
  name: 'comments',
  initialState: commentsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchRecipes.fulfilled,
      (state, action: PayloadAction<any>) => {
        commentsAdapter.upsertMany(state, action.payload.comments);
      },
    );
  },
});

export default slice.reducer;
