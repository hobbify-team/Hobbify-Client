/* eslint-disable react/jsx-fragments */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "../styles";
import Navigation from "../components/Navigation";

// Scenes
import { Register } from "../scenes/auth/register";
import InitialHome from "../scenes/initialHome";
import VerificationEmail from "../scenes/verificationEmail";
import Routines from "../scenes/routines";

const Routing = () => (
  <BrowserRouter>
    {/* Global Styles  */}
    <GlobalStyles />
    <Navigation />
    <Switch>
      {/* Routines */}
      <Route exact path="/" component={Routines} />
      {/* Auth */}
      <Route exact path="/auth" component={VerificationEmail} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Register} />
      <Route exact path="/verification" component={VerificationEmail} />
      <Route exact path="/onboarding" component={InitialHome} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
