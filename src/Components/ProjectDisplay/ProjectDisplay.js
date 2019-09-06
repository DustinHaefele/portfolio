import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import ETScreen from '../../img/ET-desktop.png';
import ETIphone from '../../img/ET-iphone.png';
import SIScreen from '../../img/SI-desktop.png';
import SIIphone from '../../img/SI-iphone.png';
import SRScreen from '../../img/SR-desktop.png';
import SRIphone from '../../img/SR-iphone.png';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './ProjectDisplay.css';

export default class ProjectDisplay extends React.Component {
  
  state = {
    projectId: 0,
    imgIdx: 0,
    textVisible: false,
    projects: [
      {
        title: 'Even-Teams',
        imgs: [ETScreen, ETIphone],
        liveSite: 'https://even-teams.now.sh/',
        frontendRepo: 'https://github.com/DustinHaefele/even-teams-client',
        BackendRepo: 'https://github.com/DustinHaefele/even-teams-server',
        description:
          'Even Teams is a full-stack app to help you make the most even teams possible for any two team sport or game.'
      },
      {
        title: 'Stay-Informed',
        imgs: [SIScreen, SIIphone],
        liveSite: 'stayinformed.now.sh',
        frontendRepo:
          'https://github.com/thinkful-ei-dragonfly/stay-informed-client',
        BackendRepo:
          'https://github.com/thinkful-ei-dragonfly/stay-informed-api',
        description:
          'Stay Informed is an app designed to help users find information on their congressional representatives by address.'
      },
      {
        title: 'Spaced-Repetition',
        imgs: [SRScreen, SRIphone],
        liveSite: 'https://spaced-repetition.dustinhaefele.now.sh/register',
        frontendRepo: 'https://github.com/DustinHaefele/spaced-repetition',
        BackendRepo:
          'https://github.com/thinkful-ei-dragonfly/spaced-repetition-api-dustin-michaelb',
        description:
          'Spaced Repetition is a full-stack app that applies a spaced repition learning algorithm to help users learn vocabulary in a new language.'
      }
    ]
  };



  setProjectId(dif) {
    let newId = this.state.projectId + dif;
    if (newId < 0) {
      this.setState({
        projectId: this.state.projects.length - 1
      });
    } else if (newId >= this.state.projects.length) {
      this.setState({
        projectId: 0
      });
    } else {
      this.setState({
        projectId: newId
      });
    }
  }

  updateImg() {
    if (this.state.imgIdx === 0) {
      this.setState({
        imgIdx: 1
      });
    } else {
      this.setState({
        imgIdx: 0
      });
    }
  }

  showText() {
    this.setState({
      textVisible: true
    });
  }
  hideText() {
    this.setState({
      textVisible: false
    });
  }

  projectImage() {
    return (
    <>
    <div className="row img desk">
    <div className='column icon'>
    <FontAwesomeIcon
      icon={faChevronLeft}
      className="project-icon"
      onClick={() => this.setProjectId(-1)}
    />
    </div>
    <div className='row display between'>
    <div className="prod_50">
      {this.state.imgIdx === 0 ? <TransitionGroup><CSSTransition key={this.state.imgIdx} timeout={500} classNames='fade'><div
        className="img-div-desk"
        onMouseEnter={() => this.showText()}
        onMouseLeave={() => this.hideText()}
      >
        <img
          src={
            this.state.projects[this.state.projectId].imgs[
              this.state.imgIdx
            ]
          }
          alt="project screenshot"
          className="project-screenshot-desk"
          onClick={() => this.updateImg()}
        />

        {this.state.textVisible && this.state.imgIdx === 0 && (
          <h2 className="text-over desktop">Click to see mobile view</h2>
        )}
        {this.state.textVisible && this.state.imgIdx === 1 && (
          <h2 className="text-over mobile">Click to see desktop view</h2>
        )}
      </div> </CSSTransition></TransitionGroup>: <TransitionGroup><CSSTransition key={this.state.imgIdx} timeout={500} classNames='fade'><div
        className="img-div-mobile"
        onMouseEnter={() => this.showText()}
        onMouseLeave={() => this.hideText()}
      >
        <img
          src={
            this.state.projects[this.state.projectId].imgs[
              this.state.imgIdx
            ]
          }
          alt="project screenshot"
          className="project-screenshot-mobile"
          onClick={() => this.updateImg()}
        />

        {this.state.textVisible && this.state.imgIdx === 0 && (
          <h2 className="text-over desktop">Click to see mobile view</h2>
        )}
        {this.state.textVisible && this.state.imgIdx === 1 && (
          <h2 className="text-over mobile">Click to see desktop view</h2>
        )}
      </div></CSSTransition></TransitionGroup>}
    </div>
    <div className='column project-info'>
      <p>This is my descrition, lorem ipsum alpha beta pi gama do do do do do dodododododododo dod od od dod </p>
      <p>This is my tech stack, lorem ipsum alpha beta pi gama do do do do do dodododododododo dod od od dod </p>
    </div>
    </div>
    <div className='column icon'>
    <FontAwesomeIcon
      icon={faChevronRight}
      className="project-icon"
      onClick={() => this.setProjectId(1)}
    /></div>
  </div>
  
  <div className="row img mob">
  <div className="img-div">
    <img
      src={this.state.projects[this.state.projectId].imgs[1]}
      alt="project screenshot"
      className="project-screenshot"
      onClick={() => this.updateImg()}
    />
  </div>
  <div className='row'>
  <FontAwesomeIcon
    icon={faChevronLeft}
    className="project-icon"
    onClick={() => this.setProjectId(-1)}
  />
  <FontAwesomeIcon
    icon={faChevronRight}
    className="project-icon"
    onClick={() => this.setProjectId(1)}
  />
  </div>
</div>
  </>) 
}

  render() {
    return (
      <div className="project">
        {this.projectImage()}
        <div className="row button-div">
          <a
            href={this.state.projects[this.state.projectId].liveSite}
            className="project-live"
          >
            <button className="project-button">Live App</button>
          </a>
          <a
            href={this.state.projects[this.state.projectId].frontendRepo}
            className="project-code"
          >
            <button className="project-button">See Client Code</button>
          </a>
          <a
            href={this.state.projects[this.state.projectId].backendRepo}
            className="project-code"
          >
            <button className="project-button">See Server Code</button>
          </a>
        </div>
        <div className="row">
          <p className="project-description">
            {this.state.projects[this.state.projectId].description}
          </p>
        </div>
      </div>
    );
  }
}
