import React from 'react';

export default class ProjectButtons extends React.Component {
  render (){
  return (
    <div className="column button-div">
          <a
            href={this.props.liveSite}
            className="project-live"
            target='_blank'
            rel="noopener noreferrer"
          >
            <button className="project-button">Live App</button>
          </a>
          <a
            href={this.props.frontendRepo}
            className="project-code"
            target='_blank'
            rel="noopener noreferrer"
          >
            <button className="project-button">See Client Code</button>
          </a>
          <a
            href={this.props.backendRepo}
            className="project-code"
            target='_blank'
            rel="noopener noreferrer"
          >
            <button className="project-button">See Server Code</button>
          </a>
        </div>
  )}
}

