import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as usuarioAction from "../../../actions/usuarioAction";
import styled from "styled-components";
import UploadPicture from "./UploadPicture";
import { Form, Input, Button, Switch } from "antd";

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

function ProfileUpdateWrapper({ form, updateInfoUser, usuario }) {
  Form.create();
  const { getFieldDecorator, setFieldsValue } = form;

  useEffect(() => {
    setFieldsValue({
      username: usuario.username,
      biography: usuario.profile.biography,
    });
  }, []);

  const [imageUrl, setObjImageUrl] = useState("");

  const information = localStorage.getItem("information");
  const userTransform = JSON.parse(information);
  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const fieldValues = {
          ...values,
          picture: imageUrl || null,
        };
        updateInfoUser(userTransform.username, fieldValues);
      }
    });
  };
  return (
    <Content>
      {console.log(usuario.profile.is_hidden)}
      <h2>Profile Update</h2>
      <Form onSubmit={handleSubmit}>
        <UploadPicture setObjImageUrl={setObjImageUrl} />
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
        <Form.Item label="Public">
          {getFieldDecorator(
            "is_hidden",
            {}
          )(<Switch defaultChecked={usuario.profile.is_hidden} />)}
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

const mapStateToProps = (reducers) => {
  return reducers.usuarioReducer;
};

const ProfileUpdate = Form.create()(ProfileUpdateWrapper);
export default connect(mapStateToProps, usuarioAction)(ProfileUpdate);
