import React from 'react';
import Gallery from 'react-grid-gallery';
import { Component } from 'react';
import { connect } from 'react-redux';

class ImageGallery extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Gallery
          images={this.props.gallery}
          maxRows={2}
          backdropClosesModal={true}
          enableKeyboardInput={true}
          enableImageSelection={false}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('hello', state);
  return { chalets: state.chalets };
};

export default connect(mapStateToProps)(ImageGallery);
