/* eslint-disable react/jsx-fragments */
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "../styles";
import Navigation from "../components/Navigation";

// Scenes
import Auth from "../scenes/auth/index";
import { Register } from "../scenes/auth/register";
import Login from "../scenes/auth/login";
import { InitialHome } from "../scenes/InitialHome";
import { VerificationEmail } from "../scenes/VerificationEmail/index";
import Routines from "../scenes/routines";
import Profile from "../scenes/Profile/index";
import ProfileUpdate from "../scenes/Profile/update/index";
import Progress from "../scenes/progress";

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
      <Route exact path="/login" component={Login} />
      <Route exact path="/verification" component={VerificationEmail} />
      {/* Essentials */}
      <Route exact path="/onboarding" component={InitialHome} />
      <Route exact path="/progress" component={Progress} />
      {/* Profile */}
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/update" component={ProfileUpdate} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
