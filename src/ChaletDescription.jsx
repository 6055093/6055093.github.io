import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from './Gallery.jsx';

class ChaletsDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <>
        <div>
          <ImageGallery gallery={this.props.chalet.gallery} />
          
        </div>
      </>
    );
  }
}

export default ChaletsDescription;
