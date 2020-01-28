import React from 'react';
import Gallery from 'react-image-gallery';
import { Component } from 'react';
import { connect } from 'react-redux';

class ImageGallery extends Component {
  constructor() {
    super();
    this.state = {
      lazyLoad: true,
      showIndex: false,
      showBullets: false,
      infinite: true,
      showThumbnails: false,
      showFullscreenButton: false,
      showGalleryFullscreenButton: true,
      showPlayButton: false,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: true,
      thumbnailPosition: 'right',
      showVideo: {},
    };
  }
  render() {
    return (
      <>
        <Gallery
          items={this.props.gallery}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={
            this.state.showFullscreenButton &&
            this.state.showGalleryFullscreenButton
          }
          showPlayButton={
            this.state.showPlayButton && this.state.showGalleryPlayButton
          }
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          isRTL={this.state.isRTL}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailOver={this.state.slideOnThumbnailOver}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log('hello', state);
  return { chalets: state.chalets };
};

export default connect(mapStateToProps)(ImageGallery);
