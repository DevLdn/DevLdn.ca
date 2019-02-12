import React, { Component } from 'react';
import Header from './components/Header';
import Info from './components/Info';
import Sponsors from './components/Sponsors';
import Community from './components/Community';
import twitter from './assets/twitter.svg';
import slack from './assets/slack.svg';
import meetup from './assets/meetup-logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Info />
        <Sponsors />
        <Community />
        <div className="footer">
          <p>
            Looking for the next step in your career? Check out{' '}
            <a
              href="https://www.ledc.com/tech-jobs"
              target="_blank"
              rel="noopener noreferrer"
            >
              LEDC's job board
            </a>{' '}
            for the latest tech jobs in London.
          </p>
          <p>
            Keep in touch and we look forward to seeing you at the next Dev
            London event!
          </p>
          <div className="contact">
            <a
              href="https://twitter.com/dev_ldn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter logo" className="social" />
            </a>
            <a href="#top">
              <img src={slack} alt="Slack logo" className="social padded" />
            </a>
            <a
              href="https://www.meetup.com/Dev-London/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={meetup} alt="Meetup logo" className="social padded" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
