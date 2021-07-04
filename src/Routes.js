import React from "react";
import { Switch, Route } from "react-router-dom";

import Album from "./components/Album";
import PhotoInput from "./components/PhotoInput";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Album} />
      <Route path="/photoinput" component={PhotoInput} />
    </Switch>
  );
};

export default Routes;
