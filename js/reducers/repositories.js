import {LOAD} from '../constants';

const repositories = (state = [], action) => {
  if (action.type === LOAD) {
    return [...state, ...action.payload.repositories]
  } else {
    return state;
  }
};

export default repositories;
