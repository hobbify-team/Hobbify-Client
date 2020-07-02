import React from 'react';
import styled from 'styled-components';
import VerificationEMailImg from '../../assets/verificationmail.svg'

const H2 = styled.h2`
    text-align: center;
    margin-top: 64px;
    font-size: 18px;
`;

const H3 = styled.h3`
    text-align: center;
    margin-top: 32px;
    margin-left: 50px;
    margin-right: 50px;
    font-size: 16px;
`;

const IMG = styled.img`
    width: 300px;
    margin-top: 88px;
`;

const DIV = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

function VerificationEMail() {
    return (
        <DIV>
            <H2>EMAIL SEND</H2>
            <H3>Please check your email and confirm the registration</H3>
            <figure>
                <IMG src={VerificationEMailImg}></IMG>
            </figure>
        </DIV>
    )
}

export default VerificationEMail