import React, { Component } from 'react';
// import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Dev London</h1>
          <div className="action-container">
            <button className="call-to-action secondary">
              join the community
            </button>
            <button className="call-to-action tertiary">
              come to an event
            </button>
          </div>
        </header>
        <div className="body">things will live here</div>
      </div>
    );
  }
}

export default App;
