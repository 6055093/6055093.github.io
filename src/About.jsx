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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
            facilis repudiandae esse, eaque animi iste illo molestiae, nobis
            inventore ut dolorum repellendus provident autem assumenda ipsam aut
            qui voluptatem maxime.Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quo facilis repudiandae esse, eaque animi iste
            illo molestiae, nobis inventore ut dolorum repellendus provident
            autem assumenda ipsam aut qui voluptatem maxime.Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Quo facilis repudiandae
            esse, eaque animi iste illo molestiae, nobis inventore ut dolorum
            repellendus provident autem assumenda ipsam aut qui voluptatem
            maxime.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
            facilis repudiandae esse, eaque animi iste illo molestiae
          </div>
        </div>
      </div>
    );
  }
}

export default About;
