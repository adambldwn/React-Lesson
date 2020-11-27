import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Movie } from '../pages/Movie';
import {MovieDetail} from "../pages/MovieDetail";
import {NavBar} from '../pages/NavBar';
export const AppRouter = () => {
    
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/detail" component={MovieDetail} exact/>
                <Route path="/" component={Movie} />
            </Switch>
        </Router>
    )
}
