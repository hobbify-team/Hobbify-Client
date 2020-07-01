import React from "react";
import styled from "styled-components";
import RegisterImage from "../../../assets/register.svg";
import { Form, Input, Button } from "antd";

const Content = styled.div`
  margin: 30px 20px;
`;

const ButtonSignUp = styled.div`
  display: block;
  margin: auto;
  padding: 20px 0;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  margin: auto;
`;

function RegisterForm({ form }) {
  Form.create();
  const { getFieldDecorator } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  return (
    <Content>
      <Form onSubmit={handleSubmit}>
        <Form.Item label="Username">
          {getFieldDecorator("username", {
            rules: [
              {
                required: true,
                message: "Please enter a username!",
              },
            ],
          })(<Input placeholder="Username" size="large" />)}
        </Form.Item>
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
                message: "Min 6 characters!",
              },
            ],
          })(
            <Input type="password" placeholder="6+ characters" size="large" />
          )}
        </Form.Item>
        <Form.Item>
          <ButtonSignUp>
            <Button type="primary" htmlType="submit" size="large">
              Sign up
            </Button>
          </ButtonSignUp>
        </Form.Item>
      </Form>
      <Image src={RegisterImage} alt="Imagen de registro" />
    </Content>
  );
}

export const Register = Form.create()(RegisterForm);
