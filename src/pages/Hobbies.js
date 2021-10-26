import React from 'react';
import Navigation from "../components/Navigation";
import HobbiesI from "../components/Hobbies/HobbiesI";
import HobbiesP from "../components/Hobbies/HobbiesP";

const Hobbies = () => {
    return (
        <div className="hobbies">
            <Navigation/>
            <div className="hobbiesContent">
                <HobbiesI/>
                <HobbiesP/>
            </div>
        </div>
    );
};

export default Hobbies;
