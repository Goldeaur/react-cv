import React from 'react';

const MyComponent = () => {
    return (
        <div className="otherSkills">
            <h3>Autres compétences</h3>
            <div className="list">
                <ul>
                    <li><i className="fas fa-check-square"></i>
                        Anglais courant
                    </li>
                    <li><i className="fas fa-check-square"></i>
                        Espagnol
                    </li>
                    <li><i className="fas fa-check-square"></i>
                        GitHub
                    </li>
                    <li><i className="fas fa-check-square"></i>
                        Jira
                    </li>
                </ul>
                <ul>
                    <li><i className="fas fa-check-square"></i>
                        Méthodologie Agile
                    </li>
                    <li><i className="fas fa-check-square"></i>
                        Figma
                    </li>
                    <li><i className="fas fa-check-square"></i>
                        Photoshop
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MyComponent;
