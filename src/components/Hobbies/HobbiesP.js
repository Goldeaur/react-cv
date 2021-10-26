import React from 'react';

const HobbiesP = () => {
    return (
        <div className="hobbiesP">
            <h3>Loisirs physiques</h3>
            <div className="hobby">
                <h4>Equitation
                    <i className="fas fa-horse"></i>
                </h4>
                <h5>1990</h5>
                <p>Galop 5 - CSO<br/>
                Randonnées : <br/>
                Corse - Mongolie - Bretagne g</p>
            </div>
            <div className="hobby">
                <h4>Aviron
                    <i className="fas fa-ship"></i>
                </h4>
                <h5>2020</h5>
                <p>Traversée de Paris</p>
            </div>
            <div className="hobby">
                <h4>Randonnée
                    <i className="fas fa-hiking"></i>
                </h4>
                <h5>2003</h5>
                <p>Mont Aigoual - Pic St Loup - Pyrénées</p>
            </div>
        </div>
    );
};

export default HobbiesP;
