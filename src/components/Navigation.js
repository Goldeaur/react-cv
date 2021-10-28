import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                <img src="./media/Etienne.jpg" alt="Profile"/>
                <h3>Etienne Savary</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/react-cv" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/react-cv/formation" activeClassName="navActive">
                            <i className="fas fa-user-graduate"></i>
                            <span>Formations</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/react-cv/knowledge" activeClassName="navActive">
                            <i className="fas fa-laptop-code"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/react-cv/hobbies" activeClassName="navActive">
                            <i className="fas fa-award"></i>
                            <span>Loisirs</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/react-cv/project" activeClassName="navActive">
                            <i className="fas fa-file-upload"></i>
                            <span>Projets</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/react-cv/contact" activeClassName="navActive">
                            <i className="fas fa-address-card"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/etienne-s-b159a663/" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Goldeaur" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/DocteurSavary" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/users/16599418/etienne-savary" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fab fa-stack-overflow"></i>
                        </a>
                    </li>
                </ul>
                <div className="signature">
                    <p>CV Etienne Savary</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
