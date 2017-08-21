import React from 'react';
import apiMock from '../../mocks';
import {TextField} from 'material-ui';

const Search = () => {
  apiMock.get('search?foo').then(repos => {
    console.error('repositories', repos);
  });

  return (
    <TextField id="repo-name" fullWidth />
  );
};

export default Search;
