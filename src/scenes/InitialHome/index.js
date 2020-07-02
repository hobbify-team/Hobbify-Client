import React from "react";
import styled, { css } from "styled-components";
import { Button } from "antd";
import InitialHomeImg from "../../assets/initialhome.svg";
import { Link } from "react-router-dom";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.1rem;
  margin-top: 72px;
`;

const Image = styled.img`
  width: 240px;
  margin-top: 64px;
  margin-bottom: 72px;
`;

const Buttons = styled.div`
  display: block;
`;

const ButtonMixin = css`
  margin-bottom: 34px;
  margin-top: 0;
`;

const StyledButton = styled(Button)`
  ${ButtonMixin};
`;

function InitialHome() {
  return (
    <Content>
      <Title>WELCOME TO OUR COMMUNITY</Title>
      <figure>
        <Image src={InitialHomeImg} alt="Initial Home Image"></Image>
      </figure>
      <Buttons>
        <Link to="/">
          <StyledButton type="primary" size="large" block>
            CREATE ROUTINE
          </StyledButton>
          {/* Insert modal for create routine */}
        </Link>
        <Link to="/profile/update">
          <StyledButton size="large" block>
            EDIT PROFILE
          </StyledButton>
        </Link>
      </Buttons>
    </Content>
  );
}

export default InitialHome;
