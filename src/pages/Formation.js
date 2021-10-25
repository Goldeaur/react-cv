import React from 'react';
import Navigation from "../components/Navigation";
import Degrees from "../components/Formation/Degrees"
import Teach from "../components/Formation/Teach"

const Formation = () => {
    return (
        <div className="formation">
            <Navigation/>
            <div className="formationContent">
              <Degrees/>
              <Teach/>
            </div>
        </div>
    );
};

export default Formation;
