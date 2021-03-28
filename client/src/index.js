import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';

import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import Layout from './layout/Layout';
import Login from './Login'
import About from './pages/About';
import Platforms from './pages/Platforms';
import Insights from './pages/Insights';
import Solution from './pages/Solution';
import Industries from './pages/Industries';
import './index.css';
import green from '@material-ui/core/colors/green';
import StoreFront from './layout/StoreFront/StoreFront';
import Home from './pages/home/Home';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5680E9',
      mainGradient: "linear-gradient(to right, tomato, cyan)",

    },
    secondary: {
      main: green[500],
    },
  },
});




function Index(props) {
  return ( <
    BrowserRouter forceRefresh = {
      true
    } >
    
    <Switch >
    <Route exact path = "/" >
    <StoreFront>
    <Home / >
    </StoreFront>
    <
    /Route> 
    < /Switch > 
   
    < /
    BrowserRouter >
  )
}




ReactDOM.render(

    <
    ThemeProvider theme = {
      theme
    } >
    <
    Index / >
    <
    /ThemeProvider>, document.getElementById('root'));
