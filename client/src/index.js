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
    <
    Layout >
    <
    Switch >
    <
    Route exact path = "/" >
    <
    Solution / >
    <
    /Route> <
    Route exact path = "/login" >
    <
    Login / >
    <
    /Route> <
    Route exact path = "/register" >
    <
    Solution / >
    <
    /Route> <
    Route exact path = "/solutions" >
    <
    Solution / >
    <
    /Route> <
    Route exact path = "/insights" >
    <
    Insights / >
    <
    /Route> <
    Route exact path = "/platforms" >
    <
    Platforms / >
    <
    /Route> <
    Route exact path = "/industries" >
    <
    Industries / >
    <
    /Route> <
    Route exact path = "/about" >
    <
    About / >
    <
    /Route> < /
    Switch > <
    /Layout> < /
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
