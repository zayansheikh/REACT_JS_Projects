import './App.css';
import React, { Component } from 'react'
import Navabr from './components/Navabr';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navabr/>
        <News pageSize={10} country="us" category="business"/>
      </div>
    )
  }
}




