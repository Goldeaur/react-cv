import React from 'react';
import Navigation from "../components/Navigation";
import Languages from "../components/Knowledge/Languages";
import Experience from "../components/Knowledge/Experience";
import OtherSkills from "../components/Knowledge/OtherSkills";
import Hobbies from "../components/Knowledge/Hobbies";

const Knowledge = () => {
    return (
        <div className="knowledge">
            <Navigation/>
            <div className="knowledgeContent">
                <Languages/>
                <Experience/>
                <OtherSkills/>
                <Hobbies/>

            </div>
        </div>
    );
};

export default Knowledge;
