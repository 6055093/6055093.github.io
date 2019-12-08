import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Features extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="features-section-container">
        <div className="feature-container">
          <img className="feature-icon" src={require('./icons/seasons.png')} />
          <h3 className="feature-title">4 Saisons</h3>
          <p className="feature-description">
            Pour la famille ou entre amis, nos chalets accueillent jusqu’à 8
            personnes en été comme en hiver.{' '}
          </p>
        </div>
        <div className="feature-container">
          <img className="feature-icon" src={require('./icons/address.png')} />
          <h3 className="feature-title">Près d'Orford</h3>
          <p className="feature-description">
            À 5 minutes de voiture de la station de ski Mont Orford.{' '}
          </p>
        </div>
        <div className="feature-container">
          <img
            className="feature-icon"
            src={require('./icons/shopping-bag.png')}
          />
          <h3 className="feature-title">Près de Magog</h3>
          <p className="feature-description">
            Assez loin de l’autoroute pour que vos oreilles se reposent et à 10
            minutes de Magog.{' '}
          </p>
        </div>
      </div>
    );
  }
}

export default Features;
