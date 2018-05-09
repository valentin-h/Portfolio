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

const intervalTime = 2000;
const initialTimeoutTime = 5000;


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: undefined,
            highlightTimeout: undefined,
            highlightedProject: undefined,
            projects: projects
        };

        this.selectProject = this.selectProject.bind(this);
        this.highlightProject = this.highlightProject.bind(this);
    }

    selectProject(key) {
        this.setState({
            highlightedProject: undefined,
            selectedProject: key
        });
    }

    getRandomProjectKey() {
        let availableProjects = this.state.projects.filter((project) => { return project.key !== this.state.highlightedProject; });
        let nextProjectKey = availableProjects[Math.floor(Math.random() * availableProjects.length)].key;
        return (nextProjectKey);
    }

    highlightProject(key, recall = false) {
        this.setState({
            highlightedProject: key
        }, () => {
            clearTimeout(this.state.highlightTimeout);
            if (recall && !this.state.selectedProject) {
                this.setState({
                    highlightTimeout: setTimeout(() => { this.highlightProject(this.getRandomProjectKey(), true) }, intervalTime)
                })
            }
        });
    }

    componentDidMount() {
        setTimeout(() => { this.highlightProject(this.getRandomProjectKey(), true) }, initialTimeoutTime);
    }

    render() {

        const projectsList = projects.map((project) =>
            <Project
                key={project.key}
                select={this.selectProject}
                highlight={this.highlightProject}
                selectedProject={this.state.selectedProject}
                highlightedProject={this.state.highlightedProject}
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
