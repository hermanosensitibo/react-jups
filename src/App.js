import React, { Component } from 'react';

//components
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homepage';
import Music from './components/pages/music';
import ReallySmoothScroll from 'really-smooth-scroll';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//includes
import './Assets/css/default.min.css';

ReallySmoothScroll.shim();

class App extends Component {
  render() {
  return (
    <Router>
      <div className="html-body">
        <Header />
        <div className="container relative">
          <Route exact path="/" component={Homepage}  /> 
          <Route exact path="/Music" component={Music}  />
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
