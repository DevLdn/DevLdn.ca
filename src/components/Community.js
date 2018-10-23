import React, { Component } from 'react';
import frontend from '../assets/front-end-logo.svg';
import ltux from '../assets/ladies-that-ux.svg';
import drupal from '../assets/drupal-london.jpg';

class Community extends Component {
  render() {
    return (
      <div className="community">
        <h1>Community</h1>
        <p>
          What else is going on in the London tech community? Check out these
          other meetups!
        </p>
        <div className="group-listings">
          <div className="group">
            <a
              href="https://www.meetup.com/London-Front-end-Development-Meetup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="logo shadow grow">
                <img src={frontend} alt="Front End meetup logo" />
              </div>
            </a>
            <h2>London front-end dev meetup</h2>
            <p>
              Hang out and discuss JavaScript, CSS and other front-end related
              tips, tricks, hacks, and frameworks with some of the other local
              developers. Show off cool stuff you've done and learn about what
              else is going on in the community. No pressure, no mandatory
              presentations.
            </p>
          </div>
          <div className="group">
            <a
              href="https://www.meetup.com/Ladies-that-UX-London-Ontario/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="logo shadow grow">
                <img src={ltux} alt="Front End meetup logo" />
              </div>
            </a>
            <h2>Ladies that UX (London)</h2>
            <p>
              The Ladies the UX, London chapter is a group of women and men who
              aim to build a positive space in the UX community to share,
              collaborate, and build their UX skills. If you are looking to
              break into the UX industry, develop your career, collaborate on a
              project or just interested in what UX is all about, they can help!
            </p>
          </div>
          <div className="group">
            <a
              href="https://www.meetup.com/londug/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="logo shadow grow">
                <img src={drupal} alt="Front End meetup logo" />
              </div>
            </a>
            <h2>Drupal Users Group</h2>
            <p>
              We alternate between presentations, discussions, sprints and/or
              drop-in sessions. For presentations, topics vary widely:
              development, theming, site building, case studies, and more.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
