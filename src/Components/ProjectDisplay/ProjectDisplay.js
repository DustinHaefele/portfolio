import React from 'react';
import './ProjectDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'; 
import ETScreen from '../../img/tinified/ET-desk.png';
import ETIphone from '../../img/tinified/ET-iphone.png';
import SIScreen from '../../img/tinified/SI-desk.png';
import SIIphone from '../../img/tinified/SI-iphone.png';
import SRScreen from '../../img/tinified/SR-desk.png';
import SRIphone from '../../img/tinified/SR-iphone.png';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProjectButtons from '../ProjectButtons/ProjectButtons';
import Images from '../Images/Images';

export default class ProjectDisplay extends React.Component {
  state = {
    projectId: 0,
    imgIdx: 0,
    textVisible: false,
    projects: [
      {
        title: 'Even Teams',
        imgs: [ETScreen, ETIphone],
        liveSite: 'https://eventeams.now.sh/',
        frontendRepo: 'https://github.com/DustinHaefele/even-teams-client',
        backendRepo: 'https://github.com/DustinHaefele/even-teams-server',
        description:
          'is a full-stack app to help you make the most even teams possible for any two team sport or game.  The idea came from my friends and I playing volleyball on wednesday nights.  We always hated deciding on teams, and we think close games are more exciting than blowouts.  If you feel the same way, this app is for you!',
        stack: ['JavaScript', 'React', 'Express', 'Node', 'PostgreSQL', 'CSS3']
      },
      {
        title: 'Stay Informed',
        imgs: [SIScreen, SIIphone],
        liveSite: 'https://stayinformed.now.sh',
        frontendRepo:
          'https://github.com/thinkful-ei-dragonfly/stay-informed-client',
        backendRepo:
          'https://github.com/thinkful-ei-dragonfly/stay-informed-api',
        description:
          'is an app designed to help users find information on their congressional representatives by searching thier address.  Our project team wanted an easy way to look up who their representatives are and who are the biggest donors to thier campaigns.  We also wanted to have their contact info and current news all in one place.  This is an app for anyone who feels the same.',
        stack: [
          'JavaScript',
          'React',
          'Express',
          'Node',
          'PostgreSQL',
          'SASS',
          'Google Civic API',
          'ProPublica API',
          'OpenSecrets API',
          'NewsAPI.org'
        ]
      },
      {
        title: 'Spaced Repetition',
        imgs: [SRScreen, SRIphone],
        liveSite: 'https://spaced-repetition.dustinhaefele.now.sh',
        frontendRepo: 'https://github.com/DustinHaefele/spaced-repetition',
        backendRepo:
          'https://github.com/thinkful-ei-dragonfly/spaced-repetition-api-dustin-michaelb',
        description:
          'is a full-stack app that applies a spaced repition learning algorithm to help users learn vocabulary in a new language.  Currently it is an MVP with only ten words and one language loaded into the database.',
        stack: ['JavaScript', 'React', 'Express', 'Node', 'PostgreSQL', 'CSS3']
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

  projectImage() {
    const project = this.state.projects[this.state.projectId];

    const firstStack = [];
    const secondStack = [];

    project.stack.forEach((tech, idx) => {
      if (idx % 2 === 0) firstStack.push(<li key={idx}>{tech}</li>);
      else secondStack.push(<li key={idx}>{tech}</li>);
    });

    return (
      <>
        <div className="row img desk">
          <div className="column icon">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="project-icon"
              onClick={() => this.setProjectId(-1)}
            />
          </div>
          <div className="row display between">
            <div className="prod_50">
              <TransitionGroup>
                <CSSTransition
                  key={this.state.imgIdx}
                  timeout={500}
                  classNames="fade"
                >
                  <Images
                    projectId={this.state.projectId}
                    updateImg={() => this.updateImg()}
                    imgIdx={this.state.imgIdx}
                  />
                </CSSTransition>
              </TransitionGroup>
            </div>
            <ProjectButtons
              projects={this.state.projects}
              projectId={this.state.projectId}
              liveSite={this.state.projects[this.state.projectId].liveSite}
              frontendRepo={this.state.projects[this.state.projectId].frontendRepo}
              backendRepo={this.state.projects[this.state.projectId].backendRepo}
            />
          </div>
          <div className="column icon">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="project-icon"
              onClick={() => this.setProjectId(1)}
            />
          </div>
        </div>
        
        <div className='mob'>
        <div className="row img">
          <div className="img-div">
            <img
              src={project.imgs[1]}
              alt="project screenshot"
              className="project-screenshot"
            />
          </div>
          <ProjectButtons
              projects={this.state.projects}
              projectId={this.state.projectId}
            />
         
        </div>
        <div className="row arrows">
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
      </>
    );
  }

  render() {
    const project = this.state.projects[this.state.projectId];

    const firstStack = [];
    const secondStack = [];

    project.stack.forEach((tech, idx) => {
      if (idx % 2 === 0) firstStack.push(<li key={idx}>{tech}</li>);
      else secondStack.push(<li key={idx}>{tech}</li>);
    });

    return (
      <div className="project">
        <div className='project-description'>
          <h3 className='project-subtitle'>What is it?</h3>
          <p>
            <span className="title">{project.title}</span> {project.description}
          </p>
        </div>
        {this.projectImage()}
        <div className='tech-stack'>
          <h3 className='project-subtitle'>Tech Stack</h3>
          <div className="row center">
            <ul className='tech-list'>{firstStack}</ul>
            <ul className='tech-list'>{secondStack}</ul>
          </div>
        </div>
      </div>
    );
  }
}
