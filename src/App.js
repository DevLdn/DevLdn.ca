import React, { Component } from 'react';
import Header from './components/Header';
import Info from './components/Info';
import Sponsors from './components/Sponsors';
import Community from './components/Community';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Info />
        <Sponsors />
        <Community />
      </div>
    );
  }
}

export default App;
