import React, {Component} from 'react';
import {portfolioData} from '../../data/portfolioData';
import Project from "./Project";

class ProjectList extends Component {
    state = {
        projects:portfolioData,
        radios: [
            {id:0, value: 'projets'},
            {id:1, value: "java"},
            {id:2, value: "javascript"},
            {id:3, value: "bootstrap"},
            {id:4, value: "angular"},
            {id:5, value: "react"},
            {id:6, value: "figma"},
            {id:7, value: "musique"},
            {id:8, value: "écriture"}

        ],
        selectedRadio: 'projets'
    }

    handleRadio = (event) => {
        this.setState({selectedRadio: event.target.value});
    }

    render() {
        let {projects, radios, selectedRadio} = this.state;
        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radio) => {
                            return (
                                <li key={radio.id}>
                                    <input
                                        type="radio"
                                        name="radio"
                                        checked={radio.value===selectedRadio}
                                        value={radio.value}
                                        id={radio.value}
                                        onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="projects">
                    {
                        projects
                            .filter(item => item.languages.includes(selectedRadio))
                            .map(project => {
                            return (
                                <Project
                                    key={project.id}
                                    project={project}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;