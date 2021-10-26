import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledge from './pages/Knowledge';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import Formation from "./pages/Formation";
import Hobbies from "./pages/Hobbies";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/knowledge" component={Knowledge}/>
                    <Route path="/project" component={Portfolio}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/formation" component={Formation}/>
                    <Route path="/hobbies" component={Hobbies}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
