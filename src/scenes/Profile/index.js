import React from "react";
import styled from "styled-components";
import { Button, Switch } from "antd";
import ProfilePicture from "../../assets/profile-picture.svg";
import { Link } from "react-router-dom";

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

function Profile() {
  return (
    <Container>
      <ImageContainer>
        <ProfileImage src={ProfilePicture} alt="Profile picture" />
      </ImageContainer>
      <MainInformation>
        <h3>Iamyoujared</h3>
        <p>Jared Ortega</p>
      </MainInformation>
      <Actions>
        <div>
          <Link to="profile/update">
            <ButtonEditProfile>Edit profile</ButtonEditProfile>
          </Link>
        </div>
        <div>
          <ButtonChangeView>Private</ButtonChangeView>
        </div>
      </Actions>
      <United>Se unio el 23 de Abril del 2020</United>
      <Separated />
      <Bio>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, saepe
        praesentium deleniti voluptatum maiores corporis soluta possimus aperiam
        laborum nulla provident repellat, facilis ut exercitationem, dolor iure
        ab cupiditate consectetur.
      </Bio>
      <LogoutButton>
        <Button size="large" type="default">
          LOG OUT
        </Button>
      </LogoutButton>
    </Container>
  );
}

export default Profile;
