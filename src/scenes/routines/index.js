import React, { Fragment, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Icon } from "antd";
import Routine from "../../components/Routine";
import styled from "styled-components";
import UsualHomePicture from "../../assets/usual-home.svg";
import ModalAddRoutine from "../../components/ModalAddRoutine";

import { connect } from "react-redux";
import * as routinesAction from '../../actions/routinesAction'

const Container = styled.div`
  height: calc(100vh - 48px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContainerPictureAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerTitle = styled.div`
  margin-bottom: 16px;
  margin-top: 48px;
`;

const Title = styled.h3`
  font-size: 1rem;
  text-align: center;
`;

const ContainerRoutines = styled.div`
  padding-top: 25px;
`;

const FloatingActionButton = styled.div`
  position: fixed;
  bottom: 64px;
  right: 16px;
`;

const Routines = ({ history, routinesPrivate, routinesPublic, getRoutines }) => {

  const information = localStorage.getItem("information");
  const userTransform = JSON.parse(information);
  const isLogged = userTransform || "";
  // console.log(isLogged);

  useEffect(() => {
    if (!isLogged) {
      history.push(`/auth`);
    } else {
      history.push(`/`);
    }
  }, []);

  useEffect(() => {
    if (isLogged) {
      getRoutines(userTransform.username);
    }
  }, [])

  const [isVisible, setIsVisible] = useState(false);

  const showModal = (value) => {
    setIsVisible(value);
  };

  return (
    <Fragment>
      <Container>
        <ContainerPictureAndTitle>
          <ContainerTitle>
            <Title>Hi !!!</Title>
            <Title>Remember that for today you have:</Title>
          </ContainerTitle>
          <div>
            <img src={UsualHomePicture} alt="Usual Home Picture"></img>
          </div>
        </ContainerPictureAndTitle>

        <ContainerRoutines>
          {
            routinesPublic.length === 0 ? (
              <p>We have no public routines</p>
            ) : (
              routinesPublic.map( r => <Routine {...r} />)
            )
          }

          {
            routinesPrivate.length === 0 ? (
              <p>We have no private routines</p>
            ) : (
                routinesPrivate.map(r => <Routine {...r} />)
              )
          }
        </ContainerRoutines>

        <FloatingActionButton>
          <Button
            type="primary"
            size="large"
            shape="circle"
            onClick={() => showModal(true)}
          >
            <Icon type="plus" />
          </Button>
        </FloatingActionButton>
        {/* modal for create routine */}
        <ModalAddRoutine isVisible={isVisible} showModal={showModal} />
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.routinesReducer;
}

// export default withRouter(Routines);
export default connect(mapStateToProps, routinesAction)(Routines)
