import React, { Component } from 'react';
import Header from './components/Header';
import Info from './components/Info';
import Community from './components/Community';
import vehikl from './assets/vehikl-square.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Info />
        <div className="sponsor">
          <p>Thank you to the generosity of our sponsors</p>
          <div className="sponsor-container">
            <div className="logo grow shadow">
              <img src={vehikl} alt="Vehikl logo" />
            </div>
            <div className="logo grow shadow" />
          </div>
        </div>
        <Community />
      </div>
    );
  }
}

export default App;
