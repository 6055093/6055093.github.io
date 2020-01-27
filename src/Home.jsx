import React, { Component } from 'react';
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
      <div>
        <Atf />
        <Features />
        {this.props.chalets.map(chalet => (
          <Chalets
            title={chalet.title}
            id={chalet.id}
            gallery={chalet.gallery}
            description={chalet.thumbnailDescription}
          />
        ))}
        <About />
      </div>
    );
  }
}

export default Home;
