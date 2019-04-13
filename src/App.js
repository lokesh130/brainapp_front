import React, { Component } from 'react';
import Pane from './components/pane/pane';
import Logo from './components/logo/logo';
import SearchBox from './components/searchbox/searchbox';
import Particles from 'react-particles-js';
import './App.css';

class App extends Component {
  render() {
    const obj={
      particles: {
        number:{
          value:300,
          density: {
            enable: true,
            value_are:800
          }
        }
      }};



    return (
      <div className="appbg">
      <Particles  params={obj} className="particlebg" />
        <Pane/>
        <Logo/>
        <SearchBox/>
      </div>
    );
  }
}

export default App;
