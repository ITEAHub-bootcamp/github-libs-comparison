import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import {customMiddleWare} from '../middlewares';

const middleware = [customMiddleWare];
const enhancer = compose(applyMiddleware(...middleware));

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
