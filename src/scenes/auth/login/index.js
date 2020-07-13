import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as usuarioAction from "../../../actions/usuarioAction";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import LoginPicture from "../../../assets/login.svg";
import { Input, Button, Form } from "antd";

const Content = styled.div`
  margin: 30px 20px;
`;

const ImageContainer = styled.figure`
  margin-top: 88px;
  margin-bottom: 24px;
`;

const Image = styled.img`
  display: block;
  margin: auto;
`;

const ButtonLogIn = styled.div`
  display: block;
  margin: auto;
  padding: 20px 0;
  text-align: center;
`;

function LoginForm({ form, history, login }) {
  Form.create();
  const { getFieldDecorator } = form;
  const information = localStorage.getItem("information");
  const userTransform = JSON.parse(information);
  const isLogged = userTransform || "";
  // useEffect(() => {
  //   if (isLogged) {
  //     history.push(`/`);
  //   }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        login(values);
        history.push(`/`);
      }
    });
  };

  return (
    <Content>
      <ImageContainer>
        <Image src={LoginPicture} alt="Login Picture" />
      </ImageContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Item label="Email">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The email is not valid!",
              },
              { required: true, message: "Please enter an email!" },
            ],
          })(<Input placeholder="Email" size="large" />)}
        </Form.Item>
        <Form.Item label="Password">
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please enter a password!",
              },
              {
                min: 6,
                message: "Password",
              },
            ],
          })(<Input type="password" placeholder="password" size="large" />)}
        </Form.Item>
        <Form.Item>
          <ButtonLogIn>
            <Button type="primary" htmlType="submit" size="large">
              Log In
            </Button>
          </ButtonLogIn>
        </Form.Item>
      </Form>
    </Content>
  );
}
const Login = Form.create()(LoginForm);
const LoginWithRouter = withRouter(Login);
export default connect(null, usuarioAction)(LoginWithRouter);
