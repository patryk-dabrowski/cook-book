import {combineReducers} from '@reduxjs/toolkit';
import recipes from './features/recipesSlice';

const rootReducer = combineReducers({
  recipes,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
