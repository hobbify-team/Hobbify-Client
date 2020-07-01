import React from 'react';

import { Div, H1, StyledImage, DivButtons, StyledButton } from './styles';

const image = 'https://opendoodles.s3-us-west-1.amazonaws.com/loving.png'

export const InitialHome = () => {
    return (
        <Div>
            <H1>Welcome to our community</H1>
            <figure>
                <StyledImage src={image} alt={image}></StyledImage>
            </figure>
            <DivButtons>
                <StyledButton variant="outlined" color="secondary">Edit Profile</StyledButton>
                <StyledButton variant="contained" color="primary">Create Routine</StyledButton>
            </DivButtons>
        </Div>
    )
};
