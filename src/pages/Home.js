import React from 'react';
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Etienne</h1>
                    <h1>Savary</h1>
                    <h4>Docteur Biologie</h4>
                    <h2>Développeur Full-Stack</h2>
                    <h3>JAVA Angular</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;
