import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GreetingCat from '../components/GreetingCat';
import Home from './../components/Home';

export default function Router({ history }) {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <Route exact path="/" render={() => <Home history={history} />} />
                    <Route exact path="/cat/:greeting" render={() => <GreetingCat history={history} />} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
}