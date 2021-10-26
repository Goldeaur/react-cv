import React, {Component} from 'react';
import ProgressBar from "./ProgressBar";

class Languages extends Component {
    state = {
        languages: [
            {id:1, value:" Java ", xp:2, className:"fab fa-java"},
            {id:2, value:" Javascript ", xp:0.5, className:"fab fa-js-square"},
            {id:3, value:" TypeScript ", xp:1, className:"fab fa-js-square"},
            {id:4, value:" Css ", xp:0.5, className:"fab fa-css3"}
        ],
        frameworks : [
            {id:1, value:"Spring Boot", xp:2, className:"fas fa-leaf"},
            {id:2, value:"Spring Webflux", xp:0.8, className:"fas fa-leaf"},
            {id:7, value:"Maven", xp:3},
            {id:3, value:"Angular", xp:1, className:"fab fa-angular"},
            {id:4, value:"Ionic", xp:1, className: "fab fa-ionic"},
            {id:5, value:"Bootstrap", xp:2, className: "fab fa-bootstrap"}
        ]
    }
    render() {
        let{languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languageDisplay"
                    title="languages"
                />

                <ProgressBar
                    languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;