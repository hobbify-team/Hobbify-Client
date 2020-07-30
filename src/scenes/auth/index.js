import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import { Button } from "antd";
import AuthImage from "../../assets/auth.svg";
import { Link } from "react-router-dom";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  width: 240px;
  margin-top: 64px;
  margin-bottom: 72px;
`;
const Buttons = styled.div`
  display: inline-block;
  justify-content: align-items;
`;
const ButtonMixin = css`
  margin-bottom: 34px;
  margin-top: 0;
`;
const StyledButton = styled(Button)`
  ${ButtonMixin};
`;
function Auth({ history }) {
  const information = localStorage.getItem("information");
  const userTransform = JSON.parse(information);
  const isLogged = userTransform || "";

  useEffect(() => {
    if (isLogged) {
      history.push(`/`);
    } else {
      history.push(`/auth`);
    }
  }, []);

  return (
    <Content>
      <figure>
        <Image src={AuthImage} alt="Landing Home Image"></Image>
      </figure>
      <Buttons>
        <Link to="/login">
          <StyledButton type="primary" size="large" block>
            SIGN IN
          </StyledButton>
        </Link>
        <Link to="/register">
          <StyledButton size="large" block>
            SING UP
          </StyledButton>
        </Link>
      </Buttons>
    </Content>
  );
}
export default withRouter(Auth);
