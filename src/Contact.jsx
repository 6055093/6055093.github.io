import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div id="contact" className="contact-wrapper">
        <div className="contact-container">
          <div className="contact-info">
          
            <div className="contact-head">Contact</div>
            <address>
            <div>
              <a href="tel:+15149232335">
                <span style={{ fontWeight: 'bolder' }}>téléphone:</span>
                <br /> 514-923-2335
              </a>
            </div>
            <br />
            <div>
              
              <a href="mailto:nathalie_081@msn.com">
                <span style={{ fontWeight: 'bolder' }}>e-mail:</span>
                <br /> nathalie_081@msn.com
              </a>
              
            </div>
            </address>
          </div>
          <div className="contact-map">
            {
              <iframe
                src={
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.389993815821!2d-72.1733809848233!3d45.3207466510256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb637491ef38237%3A0xf2f3062b14e565c3!2sLes%20Chalets%20C%C3%B4t%C3%A9%20Belval!5e0!3m2!1sen!2sca!4v1578247165726!5m2!1sen!2sca'
                }
                width={'100%'}
                height={'250px'}
                frameborder={'0'}
                style={{ border: '0' }}
                allowfullscreen={''}
              ></iframe>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
