import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledge from './pages/Knowledge';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Formation from "./pages/Formation";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/knowledge" component={Knowledge}/>
                    <Route path="/project" component={Projects}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/formation" component={Formation}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
