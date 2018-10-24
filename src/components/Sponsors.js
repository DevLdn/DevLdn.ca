import React, { Component } from 'react';
import vehikl from '../assets/vehikl-square.jpg';

class Sponsors extends Component {
  render() {
    return (
      <div className="sponsor">
        <p>Thank you to the generosity of our sponsors</p>
        <div className="sponsor-container">
          <a
            href="https://vehikl.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="logo grow shadow">
              <img src={vehikl} alt="Vehikl logo" />
            </div>
          </a>
          <div className="logo grow shadow" />
        </div>
      </div>
    );
  }
}

export default Sponsors;
