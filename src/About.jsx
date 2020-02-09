import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="about-us-container" id="a-propos">
        <div className="about-us-description-container">
          <div className="about-us-description">
            <div className="about-us-title">À propos</div>
            <img className="about-us-img" />
            {/* <div className="about-us-img-container"> */}
            {/* </div> */}
            Les Chalets Côté-Belval, c'est une histoire de famille.
            C'est deux parents, en 2012, qui ont acheté un chalet en
            rêvant un jour d'y prendre leur retraite et d'y recevoir
            leurs enfants dans un confort qu'on ne retrouve que chez
            soi. Éventuellement, un chalet se transforme en deux, puis
            trois, puis quatre. À travers les années, Éric & Nathalie
            ont pu continuer à faire vivre à des familles, comme des
            touristes et amateurs d'aventures ce même sentiment d'être
            à la maison, mais loin du stress quotidien. Pour Nathalie,
            tout est dans les petites expériences, les détails qui
            nous font sentir bien. Amateurs de voyages et de plein
            air, Éric & Nathalie font tout en leur possible pour vous
            faire sentir en visite au chalet familial - d'une
            atmosphère chaleureuse aux petites attentions qui vous
            permettront de profiter d'un séjour comme nulle part
            d'autre. Au plaisir de vous recevoir!
          </div>
        </div>
      </div>
    );
  }
}

export default About;
