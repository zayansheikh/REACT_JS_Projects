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
  pageSize = 15;
  render() {
    return (
      <div>
        <Router>
        <Navabr/>
        <Routes>
        <Route exact path="/home" element={<News key="home" pageSize={this.pageSize} country="us" category="general"/>}></Route>
        <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="us" category="general"/>}></Route>
        <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="us" category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>}></Route>
        <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="us" category="health"/>}></Route>
        <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="us" category="science"/>}></Route>
        <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="us" category="sports"/>}></Route>
        <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="us" category="technology"/>}></Route>
        {/* <Route exact path="/us" element={<News key="us" pageSize={this.pageSize} country="us"/>}></Route>
        <Route exact path="/in" element={<News key="in" pageSize={this.pageSize} country="in"/>}></Route>
        <Route exact path="/ae" element={<News key="ae" pageSize={this.pageSize} country="ae"/>}></Route> */}
        </Routes>
        </Router>
      </div>
    )
  }
}




