import { Router, Route } from "react-router-dom";
import GreetingCat from "./../components/GreetingCat";
import RandomCat from "./../components/RandomCat";

function CatsRouter({ history }) {
    return (
        <Router history={history}>
            <Route exact path="/" component={RandomCat} />
            <Route exact path="/cat/:greeting" component={GreetingCat} />
        </Router>
    );
}

export default CatsRouter;