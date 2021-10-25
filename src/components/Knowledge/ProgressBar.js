import React from 'react';

const ProgressBar = (props) => {
    console.log(props);

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Expérience : </span>
                <span>1 an</span>
                <span>2 ans</span>
                <span>3 ans</span>
            </div>


            <div className="list">
                {
                    props.languages.map((item) => {
                        let xpYears = 3;
                        let progressBar = item.xp / xpYears * 100 + '%';

                        return (
                            <div key={item.id} className="languageList">
                                <li>{item.value}</li>
                                <div className="progressBar" style={
                                    {width: progressBar}}></div>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;
