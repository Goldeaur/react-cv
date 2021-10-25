import React from 'react';

const Interest = () => {
    return (
        <div className="interests">
            <h3>Intérêts</h3>
            <ul>
                <li className="interest">
                    <i className="fab fa-react"></i>
                    <span>React</span>
                </li>
                <li className="interest">
                    <i className="fas fa-database"></i>
                    <span>MongoDB</span>
                </li>
                <li className="interest">
                    <i className="fab fa-docker"></i>
                    <span>Docker</span>
                </li>
                <li className="interest">
                    <i className="fab fa-linux"></i>
                    <span>Linux</span>
                </li>
            </ul>
            <ul>
                <li className="interest">
                    <i className="fas fa-globe-asia"></i>
                    <span>Cantonais</span>
                </li>
                <li className="interest">
                    <i className="fas fa-seedling"></i>
                    <span>Energies</span>
                </li>
                <li className="interest">
                    <i className="fas fa-microscope"></i>
                    <span>Sciences</span>
                </li>
            </ul>
        </div>
    );
};

export default Interest;
