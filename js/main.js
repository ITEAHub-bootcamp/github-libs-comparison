import React from 'react';
import ReactDOM from 'react-dom';
import Comparison from './containers/comparison';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../styles/_base.scss';

ReactDOM.render(
  <MuiThemeProvider>
    <Comparison />
  </MuiThemeProvider>,
document.getElementById('root'));
