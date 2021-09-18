import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GreetingCat from '../components/GreetingCat';
import Home from './../components/Home';

export default function Router() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cat/:greeting" component={GreetingCat} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
}