import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Atf from './Atf.jsx';
import Features from './Features.jsx';
import Chalets from './Chalets.jsx';
import About from './About.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <>
        <Atf />
        <Features />
        {this.props.chalets.map((chalet) => (
          <Chalets
            title={chalet.title}
            id={chalet.id}
            gallery={chalet.gallery}
            description={chalet.description}
          />
        ))}
        <About />
      </>
    );
  }
}

export default Home;
