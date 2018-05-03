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
            projects: projects
        }
    }

    render() {
        const listProjects = projects.map((project) =>
            <Project key={project.key} project={project}/>
        );

        const listLinks = links.map((link) =>
            <Link key={link.key} link={link}/>
        );

        return (
            <div className="App">
                <div className="App--projects--container">
                    {listProjects}
                    <div className="App--center">
                        <header className="App--title--container">
                            <h1>Valentin Henry</h1>
                            <h2>Front-end Developer</h2>
                        </header>
                    </div>
                    <div className="App--circle"></div>
                </div>
                <div className="App--contact--container">

                    {listLinks}
                </div>
            </div>
        );
    }
}

export default App;
