import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import ETScreen from '../../img/ET-desktop.png';
import ETIphone from '../../img/ET-iphone.png';
import SIScreen from '../../img/SI-desktop.png';
import SIIphone from '../../img/SI-iphone.png';
import SRScreen from '../../img/SR-desktop.png';
import SRIphone from '../../img/SR-iphone.png';
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
      description: 'Even Teams is a full-stack app to help you make the most even teams possible for any two team sport or game.'
    },
    {
      title: 'Stay-Informed',
      imgs: [SIScreen , SIIphone],
      liveSite: 'stayinformed.now.sh',
      frontendRepo: 'https://github.com/thinkful-ei-dragonfly/stay-informed-client',
      BackendRepo: 'https://github.com/thinkful-ei-dragonfly/stay-informed-api',
      description: 'Stay Informed is an app designed to help users find information on their congressional representatives by address.'
  },
    {
      title: 'Spaced-Repetition',
      imgs: [SRScreen , SRIphone],
      liveSite: 'www.google.com',
      frontendRepo: 'https://github.com/DustinHaefele/spaced-repetition',
      BackendRepo: 'https://github.com/thinkful-ei-dragonfly/spaced-repetition-api-dustin-michaelb',
      description: 'Spaced Repetition is a full-stack app that applies a spaced repition learning algorithm to help users learn vocabulary in a new language.'
    },
  
  ]};

  setProjectId(dif){
    let newId = this.state.projectId + dif
    if(newId < 0) {
      this.setState({
        projectId: this.state.projects.length - 1,
      });
    }
    else if(newId >= this.state.projects.length) {
      this.setState({
        projectId: 0,
      });
    }
    else {
      this.setState({
        projectId: newId,
      })
    }
  }

  updateImg(){
    if(this.state.imgIdx ===0) {
      this.setState({
        imgIdx: 1,
      })
    }
    else {
      this.setState({
        imgIdx: 0,
      })
    }
  }

  showText() {
    console.log('entering');
    this.setState({
      textVisible: true,
    })
  }
  hideText() {
    console.log('leaving');
    this.setState({
      textVisible: false,
    })
  }

  render() {
    return (
      <div className="project">
        <div className ='row img'>
          <FontAwesomeIcon icon={faChevronLeft} className='project-icon' onClick={()=>this.setProjectId(-1)}/>
          <div className='img-div' onMouseEnter={()=>this.showText()} onMouseLeave={()=>this.hideText()}>
            <img src ={this.state.projects[this.state.projectId].imgs[this.state.imgIdx]} alt='project screenshot' className='project-screenshot' onClick={()=> this.updateImg()}/>
            {(this.state.textVisible && this.state.imgIdx===0) && <h2 className='text-over desktop'>Click to see mobile view</h2>}
            {(this.state.textVisible && this.state.imgIdx===1) && <h2 className='text-over mobile'>Click to see desktop view</h2>}
          </div>
          <FontAwesomeIcon icon={faChevronRight} className='project-icon' onClick={()=>this.setProjectId(1)}/>
        </div>
        <div className="row button-div between">
          <a href={this.state.projects[this.state.projectId].liveSite} className="project-live"><button className ='project-button'>Live App</button></a>
          <a href={this.state.projects[this.state.projectId].frontendRepo} className="project-code"><button className='project-button'>See Client Code</button></a>
          <a href={this.state.projects[this.state.projectId].backendRepo} className="project-code"><button className='project-button'>See Server Code</button></a>
        </div>
        <div className="row">
          <p className='project-description'>{this.state.projects[this.state.projectId].description}</p>
        </div>
      </div> 
  )}
}