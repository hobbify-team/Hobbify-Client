import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as usuarioAction from "../../actions/usuarioAction";
import styled from "styled-components";
import { Button, Switch } from "antd";
import ProfilePicture from "../../assets/profile-picture.svg";
import { Link } from "react-router-dom";
import RoutinesTabs from "./routines";
import useFormatDate from '../../hooks/useFormatDate';

const Container = styled.div`
  margin: 30px;
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  margin: auto;
  display: block;
  text-align: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  border: 1px solid #e5e5e5;
  width: 100px;
  height: 100px;
`;

const LogoutButton = styled.div`
  position: fixed;
  bottom: 60px;
  right: 0;
  left: 0;
  text-align: center;
`;

const ButtonEditProfile = styled.button`
  text-align: center;
  margin: 18px auto 0;
  display: block;
  padding: 6px 20px;
  background: transparent;
  border: 1px solid #e5e5e5;
`;

const MainInformation = styled.div`
  text-align: center;
  margin-top: 10px;
  h3,
  p {
    margin: 0;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  div:first-child {
    margin-right: 8px;
  }
`;

const ButtonChangeView = styled.button`
  border: 1px solid #e5e5e5;
  padding: 6px 10px;
  background: #fff;
`;

const United = styled.small`
  margin: 10px auto;
  display: block;
  text-align: center;
`;

const Bio = styled.p`
  color: grey;
`;

const Separated = styled.hr`
  width: 100%;
  margin: 20px 0;
  border: 1px solid #e5e5e5;
`;

const Profile = ({ usuario, getInfoUser }) => {
  const information = localStorage.getItem("information");
  const userTransform = JSON.parse(information);
  useEffect(() => {
    if (Object.entries(usuario).length === 0) {
      getInfoUser(userTransform.username);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    window.location.href = '/';
  }

  const created = `Member since: ${useFormatDate(usuario.created)}`;

  return (
    <Container>
      <ImageContainer>
        <ProfileImage src={ProfilePicture} alt="Profile picture" />
      </ImageContainer>
      <MainInformation>
        <h3>{usuario.username}</h3>
        <p>
          {usuario.first_name} {usuario.last_name}
        </p>
      </MainInformation>
      <Actions>
        <div>
          <Link to="profile/update">
            <ButtonEditProfile>Edit profile</ButtonEditProfile>
          </Link>
        </div>
      </Actions>
      <United>{created}</United>
      <RoutinesTabs />
      <LogoutButton>
        <Button size="large" type="default" onClick={handleLogOut}>
          LOG OUT
        </Button>
      </LogoutButton>
    </Container>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usuarioReducer;
};

export default connect(mapStateToProps, usuarioAction)(Profile);
