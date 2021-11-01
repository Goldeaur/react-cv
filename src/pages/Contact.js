import React from 'react';
import Navigation from "../components/Navigation";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Mes coordonnées</h1>
                    <ul className="datas">
                        <li className="data">
                            <i className="fas fa-map-marker-alt"/>
                            <span>Puteaux</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"/>
                            <CopyToClipboard text="0674010687">
                           <span className="clickInput"
                                 onClick={() => {
                                     alert('Téléphone copié');
                                 }}> 06 74 01 06 87</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"/>
                            <CopyToClipboard text="etienne.savary@gmail.com">
                           <span className="clickInput"
                                 onClick={() => {
                                     alert('Adresse email copiée');
                                 }}>etienne.savary@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/etienne-s-b159a663/" target="_blank"
                           rel="noopener noreferrer">
                            <h4>Linkedin</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Goldeaur" target="_blank"
                           rel="noopener noreferrer">
                            <h4>GitHub</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://twitter.com/DocteurSavary" target="_blank"
                           rel="noopener noreferrer">
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://stackoverflow.com/users/16599418/etienne-savary" target="_blank"
                           rel="noopener noreferrer">
                            <h4>Stack overflow</h4>
                            <i className="fab fa-stack-overflow"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
