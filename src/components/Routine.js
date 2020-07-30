import React, { useState } from "react";
import styled from "styled-components";
import { Modal, Checkbox, message } from "antd";
import useFrequency from "../hooks/useFrequency";
import { login } from "../actions/usuarioAction";
import useFormatDate from '../hooks/useFormatDate'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 58px;
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.5);
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 24px;
  border-radius: 4px;
`;

const ContainerRoutine = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
`;

const RoutineName = styled.h3`
  margin: 0 0 0 24px;
  font-size: 1.2rem;
`;

const RoutineNameChecked = styled.h3`
  margin: 0 0 0 24px;
  font-size: 1.2rem;
  text-decoration-line: line-through;
  color: #7d7d7d;
`;

const ContentModal = styled.div`
  margin: 0px;
`;

const TitleModal = styled.h3`
  text-align: left;
  color: #ff1654;
`;

const Details = styled.a`
  margin-right: 24px;
  margin-left: 24px;
  font-weight: 500;
  color: #ff1654;
`;

const UnorderedList = styled.ul`
  margin-top: 8px;
`;

const ListItems = styled.li`
  font-size: 1rem;
  font-weight: 500;
`;

function Routine({ name, frequency, start_date, end_date, description }) {

  const [done, setDone] = useState(false)

  function onChange(e) {
    setDone(e.target.checked)
    if (e.target.checked) {
      message.success('Well done! keep it up :)')
    }
    // console.log(`checked = ${e.target.checked}`);
  }

  const [isVisible, setIsVisible] = useState(false);

  const showModal = (value) => {
    setIsVisible(value);
  };

  return (
    <Container>
      <ContainerRoutine>
        {
          done ? (
            <RoutineNameChecked>{name}</RoutineNameChecked>
          ) : (
            <RoutineName>{name}</RoutineName>
          )
        }
      </ContainerRoutine>
      <div>
        <Checkbox onChange={onChange}></Checkbox>
        <Details onClick={() => showModal(true)}>Details</Details>
        {/* Modal details */}
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
              <ListItems>Description: {description}</ListItems>
              <ListItems>Frecuency: {useFrequency(frequency)}</ListItems>
              <ListItems>Begin: {useFormatDate(start_date)}</ListItems>
              {/* <ListItems>End: {end_date}</ListItems> */}
              <ListItems>Progress:</ListItems>
            </UnorderedList>
          </ContentModal>
        </Modal>
      </div>
    </Container>
  );
}

export default Routine;
