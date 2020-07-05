import React from "react";
import styled from "styled-components";
import { Form, Input, Modal, Select, DatePicker, Button, Switch } from "antd";

const { Option } = Select;

const Content = styled.div`
  margin: 0px;
`;
const ButtonSignUp = styled.div`
  display: block;
  margin: auto;
  text-align: center;
`;

const Dates = styled.div`
  display: flex;
`;

const Title = styled.h2`
  text-align: center;
`;

function WrapperModal({ form, isVisible, showModal }) {
  Form.create();
  const { getFieldDecorator } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, fieldsValue) => {
      if (!err) {
        const values = {
          ...fieldsValue,
          "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
        };
        console.log("Received values of form: ", values);
      }
    });
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
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
                <Option value="daily">Daily</Option>
                <Option value="weekly">Weekly</Option>
                <Option value="monthly">Monthly</Option>
                <Option value="eachThreedays">Each 3 days</Option>
              </Select>
            )}
          </Form.Item>
          <Dates>
            <Form.Item label="Start">
              {getFieldDecorator("dateStart", {
                rules: [
                  {
                    required: true,
                    message: "Please enter a date start!",
                  },
                ],
              })(<DatePicker size="large" onChange={onChange} />)}
            </Form.Item>
            <Form.Item label="End">
              {getFieldDecorator("dateEnd", {
                rules: [
                  {
                    required: true,
                    message: "Please enter a date end!",
                  },
                ],
              })(<DatePicker size="large" />)}
            </Form.Item>
          </Dates>
          <Form.Item label="Public">
            {getFieldDecorator("private", {})(<Switch />)}
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

export const ModalAddRoutine = Form.create()(WrapperModal);
