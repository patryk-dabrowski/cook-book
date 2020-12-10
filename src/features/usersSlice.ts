import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {fetchRecipes} from './recipesSlice';
import {User} from '../types';

const usersAdapter = createEntityAdapter<User>();

export const slice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchRecipes.fulfilled,
      (state, action: PayloadAction<any>) => {
        usersAdapter.upsertMany(state, action.payload.users);
      },
    );
  },
});

export default slice.reducer;
