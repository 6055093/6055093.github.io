import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Chalets extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('gallery', this.props);
    return (
      <div className="chalets-container" id="chalets">
        <div className="chalet-section">
          <div className="img-container">
            <img src={this.props.gallery[0].original} className="chalet-img" />
          </div>
          <div className="chalet-description-container">
            <h3 className="chalet-title">{this.props.title}</h3>
            <p className="chalet-description">{this.props.description}</p>
            <Link to={`/chalet/${this.props.id}`} className="cta-chalet-button">
              Plus d'info
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Chalets;
