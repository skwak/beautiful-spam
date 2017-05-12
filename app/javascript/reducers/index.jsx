import { combineReducers } from 'redux';

import SpamReducer from './spam_reducer';

const appReducer = combineReducers({
  spam: SpamReducer
});

export default appReducer;
