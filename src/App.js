import React, { Component } from 'react';
import Header from './components/Header';
import Info from './components/Info';
import Community from './components/Community';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Info />
        <div className="sponsor" />
        <Community />
      </div>
    );
  }
}

export default App;
