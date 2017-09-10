import {LOAD} from '../constants';

const repositories = (state = [], action) => {
  if (action.type === LOAD) {
    return [...state, ...[{id: 0, name: 'created obj'}]]
  } else {
    return state;
  }
};

export default repositories;
