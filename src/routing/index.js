/* eslint-disable react/jsx-fragments */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "../styles";

// Scenes
import { Register } from "../scenes/auth/register";
import InitialHome from "../scenes/InitialHome";
import VerificationEmail from "../scenes/VerificationEmail";

const Routing = () => (
  <BrowserRouter>
    {/* Global Styles  */}
    <GlobalStyles />
    <Switch>
      {/* Landing */}
      {/* <Route exact path="/" component={Landing} /> */}
      {/* Auth */}
      <Route exact path="/register" component={Register} />
      <Route exact path="/verification" component={VerificationEmail} />
      {/* Home */}
      <Route exact path="/onboarding" component={InitialHome} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
