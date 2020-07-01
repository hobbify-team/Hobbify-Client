/* eslint-disable react/jsx-fragments */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "../styles";

// Scenes
import { Register } from "../scenes/auth/register";

const Routing = () => (
  <BrowserRouter>
    {/* Global Styles  */}
    <GlobalStyles />
    <Switch>
      {/* Landing */}
      {/* <Route exact path="/" component={Landing} /> */}
      {/* Auth */}
      <Route exact path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
