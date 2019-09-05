import React from 'react';
import './Header.css'
import { HashLink } from 'react-router-hash-link';

;


export default class Header extends React.Component {
  
  state={
    navOpen: false,
  }

  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }
  
  render() {
    return (
      <>
        <header role="navigation" className="nav">
          <div className="menu">Dustin Haefele</div>
          <div className="menu" id="menu-icon" onClick={() => this.toggleNav()}>
            &#9776;
          </div>
        </header>
        {this.state.navOpen && <nav className="nav-drop nav">
          <ul className="nav-list">
            <li>
              <HashLink className='nav-link' smooth to='/#about-me-section' onClick={()=>this.toggleNav()}>
                  About Me
              </HashLink>
            </li>
            <li>
              <HashLink className='nav-link' smooth to='/#project-section' onClick={()=>this.toggleNav()}>
                  Projects
              </HashLink>
            </li>
            <li>
              <HashLink className="nav-link" smooth to="/#skills-section" onClick={()=>this.toggleNav()}>
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink className="nav-link" smooth to="/#contact-me-section" onClick={()=>this.toggleNav()}>
                Contact Me
              </HashLink>
            </li>
          </ul>
        </nav>}
      </>
    );
  }
}
