import React from 'react';
import ProjectDisplay from '../ProjectDisplay/ProjectDisplay';

import './Projects.css';

export default class Project extends React.Component {

  state = {
    projectId: 0,
  }

  render () {

    return (
      <section className="category" id="project-section">
        <div class = 'row'>
          <h2 class = "section-title">PROJECTS</h2>
        </div>
        <ProjectDisplay projectId={this.state.projectId} />
      </section>
    )
  }
}