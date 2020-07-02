import React from 'react';
import styled from 'styled-components';
import { Button, Switch } from "antd";
import ProfilePicture from "../../assets/profile-picture.svg"

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

const IMG = styled.img`
    height: 100%;
    padding-right: 200px;
`;

const InformationDiv = styled.div`
    margin-top: 18px;
    box-shadow: 0px 6px 16px 0px rgba(0,0,0,0.5);
    width: 280px;
    height: 125px;
`;

const H3 = styled.h3`
    margin-top: 10px;
    margin-left: 24px;
`;

const UL = styled.ul`
    margin-top: 8px;
    margin-left: 24px;
`;

const LI = styled.li`
    font-size: .9rem;
    font-weight: 500;
`;

const BUTTON = styled(Button)`
    margin-top: 22px;
`;

const DivSwitch = styled(Switch)`
    position: absolute;
    bottom: 38px;
    left: 230px;
`;

function Profile( {name, email, username, accountType, startDate} ) {

    function switchOnChange(checked) {
        console.log(`You have switched on profile view`)
    }

    return (
        <Container>
            <ImageContainer>
                <IMG src={ProfilePicture} alt="Profile picture"></IMG>
            </ImageContainer>
            <InformationDiv>
                <H3>
                    General Information
                </H3>
                <UL>
                    <LI>username: {username}</LI>
                    <LI>email: {email}</LI>
                </UL>
            </InformationDiv>
            <InformationDiv>
                <H3>Details Account</H3>
                <UL>
                    <LI>Name: {name}</LI>
                    <LI>Start date: {startDate}</LI>
                    <LI>{accountType}</LI>
                </UL>
                <DivSwitch defaultChecked size="small" onChange={switchOnChange}></DivSwitch>
            </InformationDiv>
            <BUTTON size="large" type="default">
                LOG OUT
            </BUTTON>
        </Container>
    )
}

export default Profile
