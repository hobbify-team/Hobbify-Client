import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import InitialHomeImg from "../../assets/initialhome.svg";
import { Link } from "react-router-dom";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  && {
    font-size: 1.1rem;
    margin-top: 72px;
  }
`;

const StyledImage = styled.img`
  width: 240px;
  margin-top: 64px;
  margin-bottom: 72px;
`;

const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButtonRoutine = styled(Button)`
  && {
    width: 296px;
    margin-bottom: 34px;
    margin-top: 0;
  }
`;

const StyledButtonProfile = styled(Button)`
  && {
    width: 296px;
    margin-bottom: 34px;
    margin-top: 0;
    border: solid #1d3557 1px;
  }
`;

function InitialHome() {
  return (
    <Div>
      <H1>WELCOME TO OUR COMMUNITY</H1>
      <figure>
        <StyledImage
          src={InitialHomeImg}
          alt="Initial Home Image"
        ></StyledImage>
      </figure>
      <DivButtons>
        <Link to="/">
          <StyledButtonRoutine type="primary" size="large">
            CREATE ROUTINE
          </StyledButtonRoutine>
        </Link>
        <Link to="/">
          <StyledButtonProfile size="large">EDIT PROFILE</StyledButtonProfile>
        </Link>
      </DivButtons>
    </Div>
  );
}

export default InitialHome;
