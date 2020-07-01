import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const H1 = styled.h1`
    && {
        font-size: 1.5rem;
        margin-top: 72px;
    }
`;

export const StyledImage = styled.img`
    width: 240px;
    margin-top: 64px;
    margin-bottom: 72px;
`;

export const DivButtons = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledButton = styled(Button)`
    && {
        width: 296px;
        margin-bottom: 16px;
    }
`;
