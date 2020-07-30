import React from "react";
import styled from "styled-components";
import { Modal, Select } from "antd";

const { Option } = Select;

const ContentModal = styled.div`
  margin: 0px;
`;

const TitleModal = styled.h3`
  text-align: left;
  color: #ff1654;
`;

const UnorderedList = styled.ul`
  margin-top: 8px;
`;

const ListItems = styled.li`
  font-size: 1rem;
  font-weight: 500;
`;

export const ModalRoutineDetails = ({ isVisible, showModal, name }) => {
  return (
    <Modal
      centered
      visible={isVisible}
      onCancel={() => showModal(false)}
      footer={null}
      width="320px"
    >
      <ContentModal>
        <TitleModal>Details routine</TitleModal>
        <UnorderedList>
          <ListItems>Name: {name}</ListItems>
          <ListItems>Frecuency:</ListItems>
          <ListItems>Begin:</ListItems>
          <ListItems>End:</ListItems>
          <ListItems>Progress:</ListItems>
        </UnorderedList>
      </ContentModal>
    </Modal>
  );
};
