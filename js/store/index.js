import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import {logger, customThunk} from '../middlewares';

const middleware = [customThunk, logger];
const enhancer = compose(applyMiddleware(...middleware));

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
