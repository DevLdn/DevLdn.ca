import React, { Component } from 'react';
import logo from '../assets/dev-ldn_white.png';
import slack from '../assets/slack.svg';
import meetup from '../assets/meetup.png';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      button: true
    };
  }

  morphForm() {
    this.setState({ button: !this.state.button });
  }

  render() {
    let slack_class = this.state.button ? 'shrink' : 'explode';

    return (
      <header>
        <div className="handshake">
          <img src={logo} className="logo" alt="Dev London logo" />
          <h1>
            Bringing tech <span className="pop">together</span>
            <br />
            in the <span className="pop">Forest City</span>
          </h1>
        </div>
        <p>
          Dev London is your opportunity to gather insights and get inspired by
          the most influential software professionals. Hear their stories, ask
          them questions, network with others in the industry. Refreshments are
          on us!
        </p>
        <div className="action-container">
          <div className={`call-to-action slack grow shadow ${slack_class}`}>
            <img
              src={slack}
              className="slack-img left shadow"
              alt="Slack logo"
            />
            <span className="content">
              <span onClick={this.morphForm.bind(this)}>
                Join the community
              </span>
              <div className="form">
                <input type="email" placeholder="email address" />
                <button
                  className="bg-2 shadow"
                  onClick={this.morphForm.bind(this)}
                >
                  Request Invite
                </button>
              </div>
            </span>
          </div>
          <a
            className="call-to-action meetup grow shadow"
            href="https://www.meetup.com/Dev-London/"
            target="_blank"
          >
            <img
              src={meetup}
              className="meetup-img right shadow"
              alt="Meetup logo"
            />
            Come to an event
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
