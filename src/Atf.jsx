import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Atf extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="atf-container">
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
          <Link href="#chalets" className="cta-button">
            Voir les chalets
          </Link>
        </div>
      </div>
    );
  }
}

export default Atf;
