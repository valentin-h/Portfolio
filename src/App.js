import React from 'react';
import './App.css';
import Project from './Project.js';
import projects from './data/projects.js';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          projects: projects
      }
  }

  render() {
    const listProjects = projects.map((project) =>
        <Project key={project.title} project={project}/>
    );

    return (
      <div className="App">
        <div className="projects--container">
            {listProjects}
        </div>
      </div>
    );
  }
}

export default App;
