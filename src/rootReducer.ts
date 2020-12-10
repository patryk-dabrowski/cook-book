import {combineReducers} from '@reduxjs/toolkit';
import recipes from './features/recipesSlice';
import users from './features/usersSlice';
import comments from './features/commentsSlice';

const rootReducer = combineReducers({
  recipes,
  users,
  comments,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
