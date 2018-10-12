import React, { Component } from 'react';
import slack from './assets/slack.svg';
import meetup from './assets/meetup.png';

import Icon from './assets/icons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          {/* <img src={logo} className="logo" alt="Dev London logo" /> */}
          {/* <p>Bringing the Forest City tech community together.</p> */}
          <h1>
            Bringing tech <span className="pop">together</span>
            <br />
            in the <span className="pop">Forest City</span>
          </h1>
          <div className="action-container">
            <button className="call-to-action slack shadow">
              <img src={slack} className="slack-img shadow" alt="Slack logo" />
              Join the community
            </button>
            <button className="call-to-action meetup shadow">
              <img
                src={meetup}
                className="meetup-img shadow"
                alt="Meetup logo"
              />
              Come to an event
            </button>
          </div>
        </header>
        <div className="info">
          <div className="section">
            <div className="icon">
              <Icon name="calendar" width={50} fill={`#639acf`} />
            </div>
            <div className="title">
              <h2>Event Calendar</h2>
            </div>
            <div className="caption">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button>View Calendar</button>
          </div>
          <div className="section">
            <div className="icon">
              <Icon name="puzzle" width={50} fill={`#bac54b`} />
            </div>
            <div className="title">
              <h2>Volunteer Positions</h2>
            </div>
            <div className="caption">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <button>Show Me</button>
          </div>
          <div className="section">
            <div className="icon">
              <Icon name="led" width={50} fill={`#f7b733`} />
            </div>
            <div className="title">
              <h2>Submit Idea</h2>
            </div>
            <div className="caption">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
