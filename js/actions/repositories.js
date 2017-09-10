import {LOAD} from '../constants';
import apiMock from '../mocks/index';
import {showLoader, hideLoader} from './loading';

export const load = () => {
  return (dispatch, getState) => {
    // return apiMock.get('search?foo').then(repos => {
    // const url = 'https://api.github.com/search/repositories?q=react';
    // return fetch(url).then(data => data.json());

    dispatch(showLoader);
    return apiMock.get('search?foo')
      .then(repos => {
        const repositories = repos.repositories.items.slice(0, 5);

        dispatch(hideLoader);
        return dispatch({
          type: LOAD,
          payload: {repositories}
        })
      }
    )
  };
};
