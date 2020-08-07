import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme ,ThemeProvider } from '@material-ui/core';
import lime from '@material-ui/core/colors/lime'
import { lightBlue } from '@material-ui/core/colors';


//extract in seperate folder
const theme = createMuiTheme({

palette: {
  primary: lightBlue,
  secondary: lime
}

});

ReactDOM.render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

