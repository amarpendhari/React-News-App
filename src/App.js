import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Newz from "./components/Newz";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Newz}></Route>
              <Route exact path="/about" component={About}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
