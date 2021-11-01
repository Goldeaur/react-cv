import React from 'react';
import Navigation from "../components/Navigation";
import ProjectList from "../components/Portfolio/ProjectList";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Navigation/>
            <div className="portfolioContent">
                <ProjectList/>
            </div>
        </div>
    );
};

export default Portfolio;
