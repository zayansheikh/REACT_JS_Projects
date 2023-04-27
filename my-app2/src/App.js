import './App.css';
import React, { Component } from 'react'
import Navabr from './components/Navabr';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navabr/>
        <Routes>
        <Route exact path="/home" element={<News key="home" pageSize={10} country="us" category="general"/>}></Route>
        <Route exact path="/general" element={<News key="general" pageSize={10} country="us" category="general"/>}></Route>
        <Route exact path="/business" element={<News key="business" pageSize={10} country="us" category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={10} country="us" category="entertainment"/>}></Route>
        <Route exact path="/health" element={<News key="health" pageSize={10} country="us" category="health"/>}></Route>
        <Route exact path="/science" element={<News key="science" pageSize={10} country="us" category="science"/>}></Route>
        <Route exact path="/sports" element={<News key="sports" pageSize={10} country="us" category="sports"/>}></Route>
        <Route exact path="/technology" element={<News key="technology" pageSize={10} country="us" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}




