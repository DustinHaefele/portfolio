import React from 'react';
import ETScreen from '../../img/even-teams-group.png'
import './ProjectDisplay.css';

export default class ProjectDisplay extends React.Component {

  
  projects = [
    {
      title: 'Even-Teams',
      img: ETScreen,
      liveSite: 'https://even-teams.now.sh/',
      frontendRepo: 'https://github.com/DustinHaefele/even-teams-client',
      BackendRepo: 'https://github.com/DustinHaefele/even-teams-server',
      description: 'A full-stack app where you can create groups of players, give each player a skill level and the app will give you the most even teams mathmatically possible'
    },
    {
      title: '',
      img: '',
      liveSite: '',
      frontendRepo: '',
      BackendRepo: '',
      description: ''
    },
    {
      title: '',
      img: '',
      liveSite: '',
      frontendRepo: '',
      BackendRepo: '',
      description: ''
  }
  ];

  render() {
    return (
      <div className="project">
        <div className = 'row project-title'>
          <h3 className ="project-title">{this.projects[this.props.projectId].title}</h3>
        </div>
        <div className ='row img'>
          <img src ={this.projects[this.props.projectId].img} alt='project screenshot' className='project-screenshot' />
        </div>
        <div className="row between">
          <a href={this.projects[this.props.projectId].liveSite} className="project-live"><button className ='project-button'>Live App</button></a>
          <a href={this.projects[this.props.projectId].frontendRepo} className="project-code"><button className='project-button'>See Client Code</button></a>
          <a href={this.projects[this.props.projectId].backendRepo} className="project-code"><button className='project-button'>See Server Code</button></a>
        </div>
        <div className="row">
          <p className='project-description'>{this.projects[this.props.projectId].description}</p>
        </div>
      </div> 
  )}
}