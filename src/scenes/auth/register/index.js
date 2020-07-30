import React from "react";
import styled from "styled-components";
import { Form, Input, Button, message } from "antd";

import axios from "axios"

const Content = styled.div`
  margin: 30px 20px;
`;

const ButtonSignUp = styled.div`
  display: block;
  margin: auto;
  padding: 20px 0;
  text-align: center;
`;

function RegisterForm({ form }) {
  Form.create();
  const { getFieldDecorator } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {

      if (!err) {
        console.log("Received values of form: ", values);

        let data = {
          email: values.email,
          username: values.username,
          phone_number: values.phonenumber,
          password: values.password,
          password_confirmation: values.password,
          first_name: values.firstname,
          last_name: values.lastname,
        };

        console.log(data)

        axios.post(
            "http://ec2-18-220-111-217.us-east-2.compute.amazonaws.com/users/signup/", data
          )
          .then(() => {
            message.success('Great! now you can Login and start creating habits :)')
            window.location.href = `/`;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    });
  };

  return (
    <Content>
      <h2>Register</h2>
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
        <Form.Item label="First Name">
          {getFieldDecorator("firstname", {
            rules: [
              {
                required: true,
                message: "Please enter a first name!",
              },
            ],
          })(<Input placeholder="First name" size="large" />)}
        </Form.Item>
        <Form.Item label="Last Name">
          {getFieldDecorator("lastname", {
            rules: [
              {
                required: true,
                message: "Please enter a last name!",
              },
            ],
          })(<Input placeholder="Last name" size="large" />)}
        </Form.Item>
        <Form.Item label="Phone number">
          {getFieldDecorator("phonenumber", {
            rules: [
              {
                required: true,
                message: "Please enter a phone number!",
              },
            ],
          })(<Input placeholder="10+ characters" size="large" type="number" />)}
        </Form.Item>
        <Form.Item>
          <ButtonSignUp>
            <Button type="primary" htmlType="submit" size="large">
              Sign up
            </Button>
          </ButtonSignUp>
        </Form.Item>
      </Form>
    </Content>
  );
}

export const Register = Form.create()(RegisterForm);
