import React from 'react';
import './App.css';

import Project from './Project.js';
import Link from './Link.js';

import projects from './data/projects.js';
import links from './data/links.js';
import images from './data/images.js'

import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import brands from '@fortawesome/fontawesome-free-brands';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

fontawesome.library.add(brands, solid);

const intervalTime = 3500;


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
        this.closeProject = this.closeProject.bind(this);
        this.highlightProject = this.highlightProject.bind(this);
    }

    selectProject(project) {
        this.setState({
            highlightedProject: undefined,
            selectedProject: project
        });
    }

    getRandomProject() {
        let availableProjects = this.state.projects.filter(project => { return project.key !== this.state.highlightedProject; });
        return availableProjects[Math.floor(Math.random() * availableProjects.length)];
    }

    highlightProject(project, recall = false) {
        this.setState({
            highlightedProject: project
        }, () => {
            clearTimeout(this.state.highlightTimeout);
            if (recall && !this.state.selectedProject) {
                this.setState({
                    highlightTimeout: setTimeout(() => { this.highlightProject(this.getRandomProject(), true) }, intervalTime)
                })
            }
        });
    }

    closeProject() {
        this.setState({
           selectedProject: undefined
        });
        this.highlightProject(this.getRandomProject(), true);
    }

    getFollowingProject(variation) {
        const currentProjectIndex = this.state.projects.findIndex(project => { return project.key === this.state.selectedProject.key });
        let nextProjectIndex = currentProjectIndex + variation;
        if (nextProjectIndex < 0) nextProjectIndex = this.state.projects.length - 1;
        this.selectProject(this.state.projects[nextProjectIndex % this.state.projects.length]);
    }

    componentWillMount() {
        this.highlightProject(this.getRandomProject(), true);
    }

    render() {

        const projectsList = projects.map(project =>
            <Project
                key={project.key}
                select={this.selectProject}
                highlight={this.highlightProject}
                highlightedProject={this.state.highlightedProject}
                project={project}
            />
        );

        const linksList = links.map(link =>
            <Link
                key={link.key}
                link={link}
            />
        );

        const currentProjectContent = () => {
            let project = this.state.selectedProject;
            if (project) {
                const src = images[project.key];
                return (
                    <div className="App--content--project">
                        <h3 className="App--content--project--title">{project.title}</h3>
                        <p className="App--content--project--type">{project.type}</p>
                        <p className="App--content--project--tools">{project.tools}</p>
                        <p className="App--content--project--description" dangerouslySetInnerHTML={{__html: project.desc}}/>
                        {project.link &&
                            <a
                                href={project.link}
                                target="_blank"
                                className="App--content--project--link"
                            >View more</a>
                        }
                        <div className="App--content--project--image--container">
                            <img alt="" key={project.key} className="App--content--project--image" src={src}/>
                        </div>
                    </div>
                )
            }
        };

        return (
            <div className="App">
                <div className={"App--content--container " + (this.state.selectedProject ? 'displayed' : '')}>
                    <div className="App--content--controls--container">
                        <FontAwesomeIcon
                            onClick={() => { this.getFollowingProject(-1)}}
                            className="App--content--arrow"
                            icon={['fas', 'arrow-left']}
                        />
                        <FontAwesomeIcon
                            onClick={() => { this.getFollowingProject(1)}}
                            className="App--content--arrow"
                            icon={['fas', 'arrow-right']}
                        />
                        <FontAwesomeIcon
                            className="App--content--close"
                            onClick={this.closeProject}
                            icon={['fas', 'times']}
                        />
                    </div>
                    {currentProjectContent()}
                </div>
                <div className="App--projects--container">
                    {projectsList}
                    <div className="App--center">
                        <div className="App--title--container">
                            <h1>Valentin Henry</h1>
                            <h2>Front-end Developer</h2>
                        </div>
                    </div>
                    <div className="App--background--shape"/>
                </div>
                <div className="App--contact--container">
                    {linksList}
                </div>
            </div>
        );
    }
}

export default App;
