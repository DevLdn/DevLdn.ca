import React, { Component } from 'react';
import logo from '../assets/dev-ldn_white.png';
import slack from '../assets/slack.svg';
import meetup from '../assets/meetup.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      button: true,
      email: '',
      error: null,
      isLoading: false
    };
  }

  morphForm() {
    this.setState({ button: !this.state.button });
  }

  handleSubmit = () => {
    if (!this.state.email) {
      this.setState({ error: 'you fucked it up' });
      return;
    }

    this.setState({ error: null, isLoading: false });

    fetch('http://localhost:3001/invite', {
      method: 'post',
      body: JSON.stringify({ email: this.state.email }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          error: null,
          isLoading: false,
          email: '',
          button: !this.state.button
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    let slack_class = this.state.button ? 'shrink' : 'explode';

    return (
      <header>
        <div className="handshake">
          <img src={logo} className="logo" alt="Dev London logo" />
          <h1>
            Bringing tech together
            <br />
            in the Forest City
          </h1>
        </div>
        <p>
          <strong>Dev London</strong> is your opportunity to gather insights and
          get inspired by the most influential software professionals. Hear
          their stories, ask them questions, network with others in the
          industry. Refreshments are on us!
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
                <input
                  type="text"
                  name="email"
                  placeholder="email address"
                  onChange={e =>
                    this.setState({ [e.target.name]: e.target.value })
                  }
                />
                <button className="bg-2 shadow" onClick={this.handleSubmit}>
                  Request Invite
                </button>
              </div>
            </span>
          </div>
          <a
            className="call-to-action meetup grow shadow"
            href="https://www.meetup.com/Dev-London/"
            target="_blank"
            rel="noopener noreferrer"
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
