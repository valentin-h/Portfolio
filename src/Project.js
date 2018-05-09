import React, { Component } from 'react';
import './Project.css'

class Project extends Component {
  constructor(props) {
      super(props);
      this.state = { project: {} };
  }

  componentDidMount() {
      const { project } = this.props;
      import(`./images/${project.key}.jpg`).then(image => {
        this.setState({ project: {...project, image: image } })
      });
  }

  isCurrentProject() {
    return this.props.highlightedProject === this.state.project.key;
  }

  render() {

      return (
        <div
            onMouseEnter={() => this.props.highlight(this.state.project.key)}
            onMouseLeave={() => this.props.highlight(undefined, true)}
            onClick={() => this.props.select(this.state.project.key)}
            className="Project"
        >
            <img
                className={"Project--image " + (this.isCurrentProject() ? 'highlighted' : '')}
                src={this.state.project.image}
                alt={this.state.project.key}
            />
        </div>
      );
  }
}

export default Project