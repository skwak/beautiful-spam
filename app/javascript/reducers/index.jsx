import { combineReducers } from 'redux';

import SpamReducer from './spam_reducer';
import CategoriesReducer from './categories_reducer';

const appReducer = combineReducers({
  spam: SpamReducer,
  categories: CategoriesReducer
});

export default appReducer;
