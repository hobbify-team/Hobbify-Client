import React, { useState } from "react";
import { connect } from "react-redux";
import * as routinesAction from "../actions/routinesAction";
import styled from "styled-components";
import { Form, Input, Modal, Select, Button, Switch } from "antd";

const { TextArea } = Input;
const { Option } = Select;

const Content = styled.div`
  margin: 0px;
`;

const ButtonSignUp = styled.div`
  display: block;
  margin: auto;
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
`;

const TypeOfRoutine = styled.p`
  margin: 0;
  padding: 0;
`;

function WrapperModal({ form, isVisible, showModal, createRoutine }) {
  Form.create();
  const { getFieldDecorator } = form;

  const information = localStorage.getItem("information");
  const userTransform = JSON.parse(information);
  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, fieldsValue) => {
      if (!err) {
        createRoutine(userTransform.username, fieldsValue);
        showModal(false);
      }
    });
  };

  const [switchChecked, setSwitchChecked] = useState(true)

  function handleSwitchType(checked) {
    setSwitchChecked(checked)
  }

  return (
    <Modal
      centered
      visible={isVisible}
      onCancel={() => showModal(false)}
      footer={null}
      width="320px"
    >
      <Content>
        <Title>New Routine</Title>
        <Form onSubmit={handleSubmit}>
          <Form.Item label="Name">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Please enter a name!",
                },
              ],
            })(<Input placeholder="Name routine" size="large" />)}
          </Form.Item>
          <Form.Item label="Description">
            {getFieldDecorator("description", {
              rules: [
                {
                  required: true,
                  message: "Please enter a frecuency!",
                },
              ],
            })(<TextArea rows={4} />)}
          </Form.Item>

          <Form.Item label="Frecuency">
            {getFieldDecorator("frecuency", {
              rules: [
                {
                  required: true,
                  message: "Please enter a frecuency!",
                },
              ],
            })(
              <Select size="large" placeholder="Select one">
                <Option value="1">Daily</Option>
                <Option value="2">Weekly</Option>
                <Option value="3">Monthly</Option>
                <Option value="4">Each 3 days</Option>
                <Option value="5">Weekend</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label={switchChecked ? "private" : "public"}>
            {getFieldDecorator("is_private", {})(
              <Switch onChange={handleSwitchType} defaultChecked={true}/>
            )}
          </Form.Item>
          <Form.Item>
            <ButtonSignUp>
              <Button type="primary" htmlType="submit" size="large">
                Create
              </Button>
            </ButtonSignUp>
          </Form.Item>
        </Form>
      </Content>
    </Modal>
  );
}

const ModalAddRoutine = Form.create()(WrapperModal);
export default connect(null, routinesAction)(ModalAddRoutine);
