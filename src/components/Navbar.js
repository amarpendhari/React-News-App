import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="d-flex">
          <img src={logo} className="App-logo" alt="React-Img"></img>
          <ul className="navbar-nav mr-auto navbar-brand">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                React News App
              </Link>
            </li>
          </ul>
        </div>
        <div></div>
      </nav>
    );
  }
}

export default Navbar;
