import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import RoutinesImg from '../assets/routines_navbar.svg'
import ProgressIcon from '../assets/progress_navbar.svg'
import ProfileIcon from '../assets/profile_navbar.svg'

const Content = styled.div`
  position: fixed;
  height: 56px;
  bottom: 0;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  text-align: center;
  background: #FFFBFC;
  padding: 15px 10px;
  font-size: 12px;
  z-index: 1;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 24px;
  margin-bottom: 4px;
`;

const IconProgress = styled.img`
  height: 14.39px;
  margin-bottom: 4px;
`;

const IconProfile = styled.img`
  height: 14.39px;
  margin-bottom: 4px;
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
      <PageContainer>
        <Icon src={RoutinesImg} />
        <Link to="/">ROUTINES</Link>
      </PageContainer>
      <PageContainer>
        <IconProgress src={ProgressIcon} />
        <Link to="/progress">PROGRESS</Link>
      </PageContainer>
      <PageContainer>
        <IconProfile src={ProfileIcon} />
        <Link to="/profile">PROFILE</Link>
      </PageContainer>
    </Content>
  );
}

export default withRouter(Navigation);
