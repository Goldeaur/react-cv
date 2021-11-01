import React, {Component} from 'react';
import {portfolioData} from '../../data/portfolioData';
import Project from "./Project";

class ProjectList extends Component {
    state = {
        projects: portfolioData,
        radios: [
            {id: 0, value: 'projets', icon: 'fas fa-tasks'},
            {id: 1, value: "java", icon: 'fab fa-java'},
            {id: 2, value: "javascript", icon: 'fab fa-js'},
            {id: 3, value: "bootstrap", icon: 'fab fa-bootstrap'},
            {id: 4, value: "angular", icon: 'fab fa-angular'},
            {id: 5, value: "react", icon: 'fab fa-react'},
            {id: 6, value: "figma", icon: 'fab fa-figma'},
            {id: 7, value: "musique", icon: 'fas fa-music'},
            {id: 8, value: "écriture", icon: 'fas fa-pen-nib'},
            {id: 9, value: "energies", icon: 'fas fa-seedling'}

        ],
        selectedRadio: 'projets'
    }

    handleRadio = (event) => {
        this.setState({selectedRadio: event.target.value});
    }

    displayValue (value){
        return value === "projets";
    }

    render() {
        let {projects, radios, selectedRadio} = this.state;
        return (
            <div className="projectsContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radio) => {
                            return (
                                <li key={radio.id}>
                                    <label htmlFor={radio.value}>{radio.value}
                                        <i className={radio.icon} key={radio.id}></i>
                                            <input
                                                type="radio"
                                                name="radio"
                                                checked={radio.value === selectedRadio}
                                                value={radio.value}
                                                id={radio.value}
                                                onChange={this.handleRadio}
                                                className={radio.icon}
                                            />
                                    </label>
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