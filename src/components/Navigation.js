import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                <img src='./media/Etienne.jpg' alt="Profile picture"/>
                <h3>Etienne Savary</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/formation" activeClassName="navActive">
                            <i className="fas fa-user-graduate"></i>
                            <span>Formations</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/knowledge" activeClassName="navActive">
                            <i className="fas fa-laptop-code"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/hobbies" activeClassName="navActive">
                            <i className="fas fa-award"></i>
                            <span>Loisirs</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/project" activeClassName="navActive">
                            <i className="fas fa-file-upload"></i>
                            <span>Projets</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-card"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.google.com" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank"
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
