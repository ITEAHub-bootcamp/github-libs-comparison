import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import {logger, customThunk} from '../middlewares';

const middleware = [customThunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
