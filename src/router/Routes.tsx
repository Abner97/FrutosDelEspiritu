import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../components/Home";

import Results from "../pages/Results";
import Login from "../pages/Login";
import RutaPrivada from "./RutaPrivada";

const Routes = (): React.ReactElement<typeof Router> => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/results" component={Results} /> */}
        <Redirect exact from="/" to="login" />
        <Route exact path="/login" component={Login} />
        <RutaPrivada path="/home" Component={Home} />
        <RutaPrivada path="/results" Component={Results} />
      </Switch>
    </Router>
  );
};
export default Routes;
