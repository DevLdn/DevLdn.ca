import React, { Component } from 'react';
import Icon from '../assets/icons';

class Info extends Component {
  render() {
    return (
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
              We meet at the end of every month. See what's coming up by
              checking out our public calendar!
            </p>
          </div>
          <a
            className="button bg-2 shadow"
            href="https://www.meetup.com/Dev-London/events/calendar/"
            target="_blank"
          >
            <Icon name="calendar" width={30} fill={`#fff`} /> View Calendar
          </a>
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
              We run based on volunteer time. Have a free night available? Want
              to give back? See what's available!
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
          <a
            className="button bg-3 shadow"
            href="https://goo.gl/forms/Uw69BK0kNZy22BCy1"
            target="_blank"
          >
            <Icon name="led" width={30} fill={`#fff`} /> Submit Idea
          </a>
        </div>
      </div>
    );
  }
}

export default Info;
