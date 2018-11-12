import React, { Component } from 'react';
import vehikl from '../assets/vehikl-square.jpg';
import wes from '../assets/wes-bos.jpg';
import ztr from '../assets/ztr.png';

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
                href="https://wesbos.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo grow shadow wes">
                  <img src={wes} alt="Wes Bos logo" />
                </div>
              </a>
              <a
                href="http://ztr.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo grow shadow">
                  <img src={ztr} alt="ZTR Control Systems logo" />
                </div>
              </a>
            </div>
          </div>
          <div className="past">
            <h2>Past Sponsors</h2>
            <div className="sponsors-list">
              <a
                href="https://vehikl.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vehikl
              </a>{' '}
              (venue sponsor)
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
