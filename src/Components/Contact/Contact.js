import React from 'react';
import './Contact.css'

export default function Contact (){
  return (
    <section className="category _50" id = 'contact-me-section'>
      <div className='column'> 
        <ul className='contact-list'>
          <li className='row center'>
            <i className="fas fa-mail-bulk main-contact-logo"></i>
            <h2 id="contact-section-title">Contact Me</h2>
          </li>
          <li className='row center'>
            <a href="http://www.creaturecomfortsbeer.com/" className='contact-link'>
              <i className="fas fa-map-marked contact-logo"></i>
              <span>Athens, GA</span>
            </a>
          </li>
          <li className='row center'>
            <a href="emailto:Dustin.Haefele@gmail.com" className='contact-link'>
              <i className="far fa-paper-plane contact-logo"></i>
              <span>Dustin.Haefele@gmail.com</span>
            </a>
          </li>
        </ul> 
      </div>
      <div className= 'row'>
        <a href="https://www.linkedin.com/in/dustin-haefele-1921b474/" className='contact-link'><img src="./img/linkdin.svg" alt="linkdin-logo" className='link-logo logo' /></a>
        <a href="https://github.com/DustinHaefele" className='contact-link'><img src="./img/github.svg" alt="github-logo" className='git-logo logo' /></a>
      </div>
    </section>
  )
}