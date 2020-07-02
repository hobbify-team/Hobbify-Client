import React from "react";
import styled from "styled-components";
import VerificationEmailImg from "../../assets/verificationmail.svg";

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 64px;
  font-size: 18px;
`;

const Description = styled.h3`
  text-align: center;
  margin-top: 32px;
  margin-left: 50px;
  margin-right: 50px;
  font-size: 16px;
`;

const Image = styled.img`
  width: 300px;
  margin-top: 88px;
`;

function VerificationEmail() {
  return (
    <Content>
      <Title>EMAIL SEND</Title>
      <Description>
        Please check your email and confirm the registration
      </Description>
      <figure>
        <Image src={VerificationEmailImg} />
      </figure>
    </Content>
  );
}

export default VerificationEmail;
