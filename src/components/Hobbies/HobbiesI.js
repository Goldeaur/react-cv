import React from 'react';

const HobbiesI = () => {
    return (
        <div className="hobbiesI">
            <h3>Loisirs intellectuels</h3>
            <div className="hobby">
                <h4>Backgammon
                    <i className="fas fa-dice"></i>
                </h4>
                <h5>2008</h5>
                <p> Fondateur et ancien président de
                    <br/>
                    l'association francilienne
                    <br/>
                    Vie d'eau Paris Backgammon
                </p>
            </div>
            <div className="hobby">
                <h4>Photo
                    <i className="fas fa-camera"></i>
                </h4>
                <h5>2006</h5>
                <p>Reflex - Gopro <br/> Retouches - Montages</p>
            </div>
            <div className="hobby">
                <h4>Musique
                    <i className="fas fa-music"></i>
                </h4>
                <h5>1990</h5>
                <p>Claviers : piano, clavier, orgue
                    <br/>
                    - Chant Lyrique - Compositions</p>
            </div>
            <div className="hobby">
                <h4>Ecriture
                    <i className="fas fa-pen-nib"></i>
                </h4>
                <h5>2015</h5>
                <p>Parolier - Roman</p>
            </div>
        </div>
    );
};
export default HobbiesI;
