import React, { Component } from 'react';
import wes from '../assets/wes-bos.jpg';
import infotech from '../assets/infotech.svg';

class Sponsors extends Component {
  render() {
    return (
      <div className="sponsor">
        <div className="sponsors-container">
          <div className="current">
            <h1>Current Sponsors</h1>
            <p>
              This group is made possible by the generosity of our monthly
              sponsors.
            </p>
            <div className="sponsors">
              <a
                href="https://www.infotech.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo grow shadow">
                  <img
                    src={infotech}
                    class="full-width"
                    alt="Info Tech Research Group logo"
                  />
                </div>
              </a>
              <a
                href="https://wesbos.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo grow shadow wes">
                  <img src={wes} alt="Wes Bos logo" />
                </div>
              </a>
            </div>
          </div>
          <div className="past">
            <h2>Past Sponsors</h2>
            <div className="sponsors-list">
              <div className="sponsor-list-item">
                <a
                  href="http://ztr.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ZTR
                </a>{' '}
                (venue sponsor)
              </div>
              <div className="sponsor-list-item">
                <a
                  href="https://vehikl.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vehikl
                </a>{' '}
                (venue sponsor, Meetup sponsor)
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
