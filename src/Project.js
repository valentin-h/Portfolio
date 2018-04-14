import React, { Component } from 'react';
import './Project.css'

class Project extends Component {
  constructor(props) {
      super(props);
      this.state = { image: null };
  }

  componentDidMount() {
      const { project } = this.props;
      import(`./images/${project.key}.jpg`).then(image => {
        this.setState({ image: image })
      });
  }

  render() {
      return (
        <div className="Project">
            <img className="Project--image" src={this.state.image}/>
        </div>
      );
  }
}

export default Project