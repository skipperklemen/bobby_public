import React, { Component } from 'react';
import Login from './Login/Login'
import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors/blue'
import { grey } from '@material-ui/core/colors/grey';
import { purple } from '@material-ui/core/colors/purple';
import './App.css';
import Home from './home/home'



class App extends Component{
  render() {

    return(
      <div className="App">
        <Home />
      </div>
    )
  }
}

export default App;
