import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './Link.css'

class Link extends Component {
    render() {
        const icon = [this.props.link.faType, this.props.link.key];

        return (
            <a className="Link" href={this.props.link.url} target={this.props.link.target}>
                <FontAwesomeIcon className="Link--icon" icon={icon} />
            </a>
        );
    }
}

export default Link