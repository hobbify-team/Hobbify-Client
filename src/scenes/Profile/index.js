import React from "react";
import styled from "styled-components";
import { Button, Switch } from "antd";
import ProfilePicture from "../../assets/profile-picture.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 50px;
`;

const ProfileImage = styled.img`
  height: 100%;
  padding-right: 200px;
`;

const InformationDiv = styled.div`
  margin-top: 18px;
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.5);
  width: 280px;
  height: 125px;
`;

const H3 = styled.h3`
  margin-top: 10px;
  margin-left: 24px;
`;

const UnorderedList = styled.ul`
  margin-top: 8px;
  margin-left: 24px;
`;

const ListItems = styled.li`
  font-size: 0.9rem;
  font-weight: 500;
`;

const LogoutButton = styled(Button)`
  margin-top: 22px;
`;

const SwitchButton = styled(Switch)`
  position: absolute;
  bottom: 38px;
  left: 230px;
`;

function Profile({ name, email, username, accountType, startDate }) {
  function switchOnChange(checked) {
    console.log(`You have switched on profile view`);
  }

  return (
    <Container>
      <ImageContainer>
        <ProfileImage src={ProfilePicture} alt="Profile picture"></ProfileImage>
      </ImageContainer>
      <InformationDiv>
        <H3>General Information</H3>
        <UnorderedList>
          <ListItems>username: {username}</ListItems>
          <ListItems>email: {email}</ListItems>
        </UnorderedList>
      </InformationDiv>
      <InformationDiv>
        <H3>Details Account</H3>
        <UnorderedList>
          <ListItems>Name: {name}</ListItems>
          <ListItems>Start date: {startDate}</ListItems>
          <ListItems>{accountType}</ListItems>
        </UnorderedList>
        <SwitchButton
          defaultChecked
          size="small"
          onChange={switchOnChange}
        ></SwitchButton>
      </InformationDiv>
      <LogoutButton size="large" type="default">
        LOG OUT
      </LogoutButton>
    </Container>
  );
}

export default Profile;
