import React from "react";
import styled from "styled-components";
import UploadPicture from "./UploadPicture";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;

const Content = styled.div`
  margin: 20px;
`;

const ButtonSave = styled.div`
  display: block;
  margin: auto;
  padding: 20px 0;
  text-align: center;
`;

function ProfileUpdateWrapper({ form }) {
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
      <h2>Profile Update</h2>
      <Form onSubmit={handleSubmit}>
        <UploadPicture />
        <Form.Item label="Username">
          {getFieldDecorator(
            "username",
            {}
          )(<Input placeholder="Username" size="large" />)}
        </Form.Item>
        <Form.Item label="Biography">
          {getFieldDecorator(
            "biography",
            {}
          )(<TextArea rows={4} placeholder="Biography" />)}
        </Form.Item>
        <Form.Item>
          <ButtonSave>
            <Button type="primary" htmlType="submit" size="large">
              Save
            </Button>
          </ButtonSave>
        </Form.Item>
      </Form>
    </Content>
  );
}

export const ProfileUpdate = Form.create()(ProfileUpdateWrapper);
