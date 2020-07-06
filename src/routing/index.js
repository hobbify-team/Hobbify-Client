/* eslint-disable react/jsx-fragments */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "../styles";
import Navigation from "../components/Navigation";

// Scenes
import Auth from "../scenes/auth/index";
import { Register } from "../scenes/auth/register";
import InitialHome from "../scenes/initialHome";
import VerificationEmail from "../scenes/verificationEmail";
import Routines from "../scenes/routines";
import Profile from "../scenes/profile";

const Routing = () => (
  <BrowserRouter>
    {/* Global Styles  */}
    <GlobalStyles />
    <Navigation />
    <Switch>
      {/* Routines */}
      <Route exact path="/" component={Routines} />
      {/* Auth */}
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Register} />
      <Route exact path="/verification" component={VerificationEmail} />
      {/* Essentials */}
      <Route exact path="/onboarding" component={InitialHome} />
      {/* Profile */}
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
