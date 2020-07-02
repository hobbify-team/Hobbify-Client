import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Content = styled.div`
  position: fixed;
  bottom: 0;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  text-align: center;
  background: #ffe9ef;
  padding: 15px 10px;
  font-size: 12px;
`;

function Navigation({ location }) {
  // Hide Nav if match next routes
  if (
    location.pathname.match("/onboarding") ||
    location.pathname.match("/verification") ||
    location.pathname.match("/register") ||
    location.pathname.match("/login") ||
    location.pathname.match("/auth")
  ) {
    return null;
  }

  return (
    <Content>
      <div>
        <Link to="/routines">ROUTINES</Link>
      </div>
      <div>PROGESS</div>
      <div>GROUPS</div>
      <div>PROFILE</div>
    </Content>
  );
}

export default withRouter(Navigation);
