import React from 'react';
import Pup from '../../img/site-sketch.jpg';


import './Hero.css';

export default class Hero extends React.Component {
  render() {
    return (
      <section role="banner" className="hero">
        <div className="row hero-row">
          <div className="hero-name _50">
            <h1>Dustin Haefele:</h1>
            <h2 className="subtitle">
              Former Chemical Engineer, <br />
              Current Web Developer.
            </h2>
          </div>
          <div className="hero-image _50">
            <img src={Pup} alt="Me and my pup" id="sketch" />
          </div>
        </div>
        <div className="quote">
          <p>
            "Pursue the things you love doing and then do them so well that
            people can't take their eyes off of you." <br />
            -Maya Angelou
          </p>
        </div>
      </section>
    );
  }
}
