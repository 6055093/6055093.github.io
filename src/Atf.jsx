import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const video = require('./images/Snow-motion.mp4');

class Atf extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="atf-container">
        {/* <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video> */}
        <div className="atf-sub-container">
          <h1 className="slogan">
            Le chalet de vos rêves
            <br /> au coeur du Mont Orford
          </h1>
          <h2 className="sub-slogan">
            À 5 minutes de voiture de la station Ski Mont Orford
            <br /> et 2 minutes du Golf. Parfait pour les familles et
            <br /> les petits groupes de vacanciers sportifs.
          </h2>
          <NavLink to={'#chalets'} className="cta-button">
            Voir les chalets
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Atf;
