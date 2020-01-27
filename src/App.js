import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './main.css';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import ChaletDescription from './ChaletDescription.jsx';
import Contact from './Contact.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderHome = () => {
    return <Home chalets={this.props.chalets} />;
  };
  renderChalet = routerData => {
    console.log('rendering chalet...');
    const chaletId = Number(routerData.match.params.chaletId);
    const chalet = this.props.chalets.find(chalet => chalet.id === chaletId);
    return <ChaletDescription chalet={chalet} />;
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div>
          <Route exact={true} path="/" render={this.renderHome} />
          <Route
            exact={true}
            path="/chalet/:chaletId"
            render={this.renderChalet}
          />
        </div>
        <Contact />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { chalets: state.chalets };
};
export default connect(mapStateToProps)(App);
