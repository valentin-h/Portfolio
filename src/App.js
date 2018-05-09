import React from 'react';
import './App.css';

import Project from './Project.js';
import Link from './Link.js';

import projects from './data/projects.js';
import links from './data/links.js';

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(brands, solid);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: undefined,
            projects: projects
        };

        this.selectProject = this.selectProject.bind(this)
    }

    selectProject(key) {
        this.setState({
            selectedProject: key
        });
    }

    render() {

        const projectsList = projects.map((project) =>
            <Project
                key={project.key}
                selectedProject={this.state.selectedProject}
                select={this.selectProject}
                project={project}
            />
        );

        const linksList = links.map((link) =>
            <Link
                key={link.key}
                link={link}
            />
        );

        return (
            <div className="App">
                <div className={"App--content--container " + (this.state.selectedProject ? 'displayed' : '')}>

                </div>
                <div className="App--projects--container">
                    {projectsList}
                    <div className="App--center">
                        <header className="App--title--container">
                            <h1>Valentin Henry</h1>
                            <h2>Front-end Developer</h2>
                        </header>
                    </div>
                    <div className="App--background--shape"></div>
                </div>
                <div className="App--contact--container">
                    {linksList}
                </div>
            </div>
        );
    }
}

export default App;
