import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/Home";

import Results from "../pages/Results";

const Routes = (): React.ReactElement<typeof Router> => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </Router>
  );
};
export default Routes;
