import React, {Component} from 'react';
import ProgressBar from "./ProgressBar";

class Languages extends Component {
    state = {
        languages: [
            {id:1, value:"Java", xp:2},
            {id:2, value:"Javascript", xp:0.5},
            {id:3, value:"TypeScript", xp:1},
            {id:4, value:"Css", xp:0.5}
        ],
        frameworks : [
            {id:1, value:"Spring Boot", xp:2},
            {id:2, value:"Spring Webflux", xp:0.8},
            {id:7, value:"Maven", xp:3},
            {id:3, value:"Angular", xp:1},
            {id:4, value:"Ionic", xp:1},
            {id:5, value:"Bootstrap", xp:2}
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