import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../styles/_base.scss';

ReactDOM.render(<MuiThemeProvider><Search /></MuiThemeProvider>, document.getElementById('root'));
