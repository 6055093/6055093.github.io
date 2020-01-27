import React, { Component } from 'react';
import ImageGallery from './Gallery.jsx';
import { IconContext } from 'react-icons';
import { MdGroup, MdLocalParking, MdSmokingRooms } from 'react-icons/md';
import {
  GiClothespin,
  GiCampfire,
  GiFireplace,
  GiTv,
  GiBarbecue,
} from 'react-icons/gi';
import { FaPaw, FaWifi } from 'react-icons/fa';
import { IoLogoNoSmoking } from 'react-icons/io';

class ChaletsDescription extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    console.log(this.props);
    const specs = this.props.chalet.specs;
    console.log('these are the specs', specs);
    return (
      <>
        <div className="chalet-page-container">
          <div className="chalet-page-wrapper">
            <div className="chalet-description-header">
              <div className="chlt-desc-title-wrap">
                <h1>{this.props.chalet.title}</h1>
              </div>
            </div>
            <div className="chalet-page-atf-wrapper">
              <div className="gallery-wrapper">
                <div className="gallery-container">
                  <ImageGallery gallery={this.props.chalet.gallery} />
                </div>
              </div>
              <div className="chalet-page-specs-wrapper">
                <div className="chalet-page-description-container">
                  <IconContext.Provider
                    value={{
                      color: 'black',
                      size: '25px',
                      className: 'icon-class-name',
                    }}
                  >
                    <div className="chalet-description-specs">
                      <h3 className="spec-icons">
                        {specs.hasWifi ? (
                          <span>
                            <FaWifi /> Wifi
                          </span>
                        ) : (
                          ''
                        )}
                      </h3>
                      <h3 className="spec-icons">
                        {specs.hasFireplace ? (
                          <span>
                            <GiFireplace /> Foyer
                          </span>
                        ) : (
                          ''
                        )}
                      </h3>
                      <h3 className="spec-icons">
                        {specs.hasCable ? (
                          <span>
                            <GiTv /> Cable
                          </span>
                        ) : (
                          ''
                        )}
                      </h3>
                      <h3 className="spec-icons">
                        {specs.hasBbq ? (
                          <span>
                            <GiBarbecue /> Barbecue
                          </span>
                        ) : (
                          ''
                        )}
                      </h3>
                      <h3 className="spec-icons">
                        {specs.hasCampfire ? (
                          <span>
                            <GiCampfire /> Feu Exterieur
                          </span>
                        ) : null}
                      </h3>
                      <h3 className="spec-icons">
                        {specs.hasWasher ? (
                          <span>
                            <GiClothespin /> Laveuse/Secheuse
                          </span>
                        ) : null}
                      </h3>
                      <h3 className="spec-icons">
                        {specs.hasParking ? (
                          <span>
                            <MdLocalParking /> Stationnement
                          </span>
                        ) : (
                          ''
                        )}
                      </h3>
                      <h3 className="spec-icons">
                        {specs.allowSmoking ? (
                          <span>
                            <MdSmokingRooms /> Fumeur
                          </span>
                        ) : (
                          <span>
                            <IoLogoNoSmoking /> Non Fumeur
                          </span>
                        )}
                      </h3>
                      <h3 className="spec-icons">
                        {specs.allowAnimals ? (
                          <span>
                            <FaPaw />
                            Animaux permis
                          </span>
                        ) : (
                          <span>
                            <FaPaw />
                            Animaux non permis
                          </span>
                        )}
                      </h3>
                    </div>
                  </IconContext.Provider>
                  <div className="chlt-desc-btn-wrap">
                    <button className="chalet-description-button">
                      <a target="_blank" href={this.props.chalet.source}>
                        RESERVEZ EN LIGNE
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chalet-page-description-wrapper">
            <div className="chalet-page-description">
              <h2>Description</h2>
              <p>{this.props.chalet.chaletDescription[0]}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ChaletsDescription;
