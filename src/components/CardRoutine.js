import React, { useState } from "react";
import { connect } from "react-redux";
import * as routinesAction from "../actions/routinesAction";
import styled from "styled-components";
import { Icon, Checkbox } from "antd";
import { ModalRoutineDetails } from "./ModalRoutineDetails";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  div:first-child {
    display: inline-flex;
    p {
      margin-left: 6px;
    }
  }
`;

const Actions = styled.ul`
  li {
    display: inline-block;
    margin-right: 10px;
    font-size: 17px;
    color: #247ba0;
  }
`;

const CardRoutine = ({ name, id, actionRoutine, paused }) => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const [isVisible, setIsVisible] = useState(false);

  const showModal = (value) => {
    setIsVisible(value);
  };

  const information = localStorage.getItem("information");
  const userTransform = JSON.parse(information);
  const changeStatusRoutine = (actionType) => {
    const data = {
      ...(actionType === "delete" && { is_hidden: true }),
      ...(paused === false && actionType === "pause" && { paused: true }),
    };
    actionRoutine(userTransform.username, data, id, actionType);
    if (paused && actionType === "pause") {
      const data = {
        paused: false,
      };
      actionRoutine(userTransform.username, data, id, actionType);
    }
  };

  return (
    <Content>
      <div>
        <Checkbox onChange={onChange} />
        <p onClick={() => showModal(true)}>{name}</p>
      </div>
      <div>
        <Actions>
          <li>
            <Icon type="edit" />
          </li>
          <li onClick={() => changeStatusRoutine("pause")}>
            {paused ? <Icon type="caret-right" /> : <Icon type="pause" />}
          </li>
          <li onClick={() => changeStatusRoutine("delete")}>
            <Icon type="delete" />
          </li>
        </Actions>
        <ModalRoutineDetails
          isVisible={isVisible}
          showModal={showModal}
          name={name}
        />
      </div>
    </Content>
  );
};

export default connect(null, routinesAction)(CardRoutine);
