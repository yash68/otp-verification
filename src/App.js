import React from 'react';
import OTPBox from './OTPBox';
import Home from './Home';
import Dashboard from './Dashboard'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

function App() {

        return(
            <div className = "row">
            <Router>
            <Switch>
            <Route exact path="/" component={ Home }></Route>
             <Route path="/home" component={ OTPBox }></Route>
             <Route path="/dashboard" component = {Dashboard}></Route>
             </Switch>
             </Router>
              </div>


        );

}

export default App;
