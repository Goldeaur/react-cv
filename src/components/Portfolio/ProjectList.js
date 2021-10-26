import React, {Component} from 'react';
import {portfolioData} from "../../data/portfolioData";
import Project from "./Project";

class ProjectList extends Component {
    state = {
        projects:portfolioData,
        radios: [
            {id:1, value: "javascript"},
            {id:2, value: "bootstrap"},
            {id:3, value: "angular"},
            {id:4, value: "react"},
            {id:5, value: "figma"},
            {id:6, value: "music"},
            {id:7, value: "write"},
            {id:9, value: ''}
        ],
        selectedRadio: ''
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