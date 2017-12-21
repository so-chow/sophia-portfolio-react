import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="nav-bar">
            <Header />
            <nav className="tabs">
              <NavLink className="btn btn-5 btn-5a icon-remove" exact to="/">Home</NavLink>
              <NavLink className="btn btn-5 btn-5a icon2-remove" exact to="/projects">Projects</NavLink>
              <NavLink className="btn btn-5 btn-5a icon3-remove" exact to="/about">About</NavLink>
              <NavLink className="btn btn-5 btn-5a icon4-remove" exact to="/contact">Contact</NavLink>
            </nav>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
