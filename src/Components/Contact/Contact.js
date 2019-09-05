import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMailBulk, faMapMarked, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import LinkedIn from '../../img/linkdin.svg';
import Github from '../../img/github.svg';
import './Contact.css';

export default function Contact() {
  return (
    <section className="category _50" id="contact-me-section">
      <div className="column">
        <ul className="contact-list">
          <li className="row center">
          <FontAwesomeIcon
            icon={faMailBulk}
            className="main-contact-logo"
          />
            <h2 id="contact-section-title">Contact Me</h2>
          </li>
          <li className="row center">
            <a
              href="http://www.creaturecomfortsbeer.com/"
              className="contact-link"
            >
              <FontAwesomeIcon
                icon={faMapMarked}
                className="contact-logo"
              />
              <span>Athens, GA</span>
            </a>
          </li>
          <li className="row center">
            <a href="emailto:Dustin.Haefele@gmail.com" className="contact-link">
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="contact-logo"
            />
              <span>Dustin.Haefele@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="row">
        <a
          href="https://www.linkedin.com/in/dustin-haefele-1921b474/"
          className="contact-link"
        >
          <img src={LinkedIn} alt="linkdin-logo" className="link-logo logo" />
        </a>
        <a href="https://github.com/DustinHaefele" className="contact-link">
          <img src={Github} alt="github-logo" className="git-logo logo" />
        </a>
      </div>
    </section>
  );
}
