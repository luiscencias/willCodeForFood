import React, { Component } from 'react';

//import { Provider } from "react-redux";
//import store from "../state/store";

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './mui-theme';
import CssBaseline from '@material-ui/core/CssBaseline';

import { AppLayout } from '../views/layouts/app-layout';
import { BrowserRouter as Router}  from 'react-router-dom';
import Routes from './routes';

import smoothscroll from 'smoothscroll-polyfill';




const App = () => {
  smoothscroll.polyfill();

  return (
    <MuiThemeProvider theme={theme}>
    
      <CssBaseline />
      
      <Router>
        <AppLayout>
          <Routes />
        </AppLayout>
      </Router>
      
    </MuiThemeProvider>
  );
}

export default App;