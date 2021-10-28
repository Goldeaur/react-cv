import React from 'react';
import Home from "./pages/Home";
import Knowledge from "./pages/Knowledge";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Formation from "./pages/Formation";
import Hobbies from "./pages/Hobbies";
import NotFound from "./pages/NotFound";

import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/react-cv/" exact component={Home}/>
                    <Route path="/react-cv/knowledge" component={Knowledge}/>
                    <Route path="/react-cv/project" component={Portfolio}/>
                    <Route path="/react-cv/contact" component={Contact}/>
                    <Route path="/react-cv/formation" component={Formation}/>
                    <Route path="/react-cv/hobbies" component={Hobbies}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
