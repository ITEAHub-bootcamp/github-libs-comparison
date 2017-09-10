import {LOAD} from '../constants';
import apiMock from '../mocks/index';

export const load = () => {
  // request to some API
  return (dispatch, getState) => {
    return apiMock.get('search?foo').then(repos => {
      const repositories = repos.repositories.items.slice(0, 5);

      return dispatch({
        type: LOAD,
        payload: {repositories}
      })
    })
  };
};
