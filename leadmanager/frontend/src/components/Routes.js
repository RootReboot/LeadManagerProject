import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

//Views
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import Dashboard from "./leads/Dashboard";
import PrivateRoute from "./common/PrivateRoute";

export class Routes extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    );
  }
}

export default Routes;
