import React, { Component } from 'react';
import Icon from './assets/icons';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="info">
          <div className="section">
            <div className="icon">
              <Icon name="calendar" width={50} fill={`#639acf`} />
            </div>
            <div className="title">
              <h2>Event Calendar</h2>
            </div>
            <div className="caption">
              <p>
                We meet on the last Tuesday of every month. See what's coming up
                by checking out our public calendar!
              </p>
            </div>
            <button className="bg-2 shadow">
              <Icon name="calendar" width={30} fill={`#fff`} /> View Calendar
            </button>
          </div>
          <div className="section">
            <div className="icon">
              <Icon name="puzzle" width={50} fill={`#bac54b`} />
            </div>
            <div className="title">
              <h2>Volunteer Positions</h2>
            </div>
            <div className="caption">
              <p>
                We run based on volunteer time. Have a free night available?
                Want to give back? See what's available!
              </p>
            </div>
            <button className="bg-1 shadow">
              <Icon name="puzzle" width={30} fill={`#fff`} /> Volunteer
            </button>
          </div>
          <div className="section">
            <div className="icon">
              <Icon name="led" width={50} fill={`#f7b733`} />
            </div>
            <div className="title">
              <h2>Your Ideas</h2>
            </div>
            <div className="caption">
              <p>
                Do you have a talk you'd like to give? A workshop you'd like to
                run? A panel discussion? Sign up!
              </p>
            </div>
            <button className="bg-3 shadow">
              <Icon name="led" width={30} fill={`#fff`} /> Submit Idea
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
