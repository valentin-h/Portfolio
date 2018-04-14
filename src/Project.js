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
        this.setState({ project: { image: image } })
      });
  }

  render() {
      return (
        <div className="Project">
            <img className="Project--image" src={this.state.project.image} alt={this.state.project.name}/>
        </div>
      );
  }
}

export default Project