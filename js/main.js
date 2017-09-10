import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Comparison from './containers/comparison';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store';
import {initialStore} from './store/initial-store';

import '../styles/_base.scss';

const store = configureStore(initialStore);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Comparison/>
    </MuiThemeProvider>
  </Provider>,
document.getElementById('root'));
