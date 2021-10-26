import React, {Component} from 'react';

export default class Project extends Component {
    state = {
        showInfos: false
    }
    handleInfo = () => {
        this.setState({
            showInfos: !this.state.showInfos
        });
    }
    render() {
        let {name, languagesIcons, source, info, picture} = this.props.project;
        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon =>
                        <i className={icon} key={icon}></i>
                    )}
                </div>
                <h3>{name}</h3>
                <img src={picture} onClick={this.handleInfo}/>
                <span className="infos" onClick={this.handleInfo}>
                    <i className="fas fa-plus-circle"/>
                </span>
                {
                    this.state.showInfos && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <a href={source} rel="noopener noreferrer"
                                        className="button" target = "_blank">Voir</a>
                                    </div>
                                </div>
                                <p className="text">{info}</p>
                                <div className="button return" onClick={this.handleInfo}>Retourner sur la page</div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}