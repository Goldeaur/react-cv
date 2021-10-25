import React from 'react';
import Navigation from "../components/Navigation";

const Hobbies = () => {
    return (
        <div className="hobbies">
            <Navigation/>
            <div className="hobbiesContent">
                <div className="intellectual">
                    <h3>Loisirs de l'esprit</h3>
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
                        <p>Reflex - Gopro / Retouches et Montages</p>
                    </div>
                    <div className="hobby">
                        <h4>Musique
                            <i className="fas fa-music"></i>
                        </h4>
                        <h5>1990</h5>
                        <p>Claviers - Chant Lyrique - Compositions</p>
                    </div>
                    <div className="hobby">
                        <h4>Ecriture
                            <i className="fas fa-pen-nib"></i>
                        </h4>
                        <h5>2015</h5>
                        <p>Parolier - Roman</p>
                    </div>
                </div>


                <div className="sports">
                    <h3>Loisirs du corps</h3>
                    <div className="hobby">
                        <h4>Equitation
                            <i className="fas fa-horse"></i>
                        </h4>
                        <h5>1990</h5>
                        <p>Galop 5 - CSO - Randonnées</p>
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
            </div>

        </div>
    );
};

export default Hobbies;
