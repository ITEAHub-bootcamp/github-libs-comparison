import loading from './loading';
import repositories from './repositories';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  repositories,
  loading
});

export default rootReducer;
