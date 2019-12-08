import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="navbar">
          <div className="nav-logo-container">
            <img
              className="nav-logo-img"
              src={require('./images/Logo-250px.png')}
            />
          </div>
          <div className="nav-links-container">
            <a className="nav-links" href="#chalets" to="/">
              Les Chalets
            </a>
            <a className="nav-links" href="#a-propos">
              À propos
            </a>
            <a className="nav-links" href="#">
              Contact
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;
