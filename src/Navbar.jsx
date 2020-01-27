import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div id="top" className="navbar-wrapper">
          <div className="navbar">
            <div className="nav-logo-container">
              <NavLink to={'/#top'}>
                <img
                  className="nav-logo-img"
                  src={require('./images/Logo-250px.png')}
                  onClick={this.scrollToTop}
                />
              </NavLink>
            </div>
            <div className="nav-links-container">
              <NavLink className="nav-links" to={'/#chalets'}>
                Les Chalets
              </NavLink>
              <NavLink className="nav-links" to={'/#a-propos'}>
                À propos
              </NavLink>
              <NavLink className="nav-links" to={'/#contact'}>
                Contact
              </NavLink>
              <a className="nav-links nav-button" href="tel:+15149232335">
                514-923-2335
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;
