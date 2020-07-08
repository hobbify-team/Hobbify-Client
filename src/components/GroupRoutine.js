import React from 'react';
import styled from 'styled-components';
import { Checkbox, Icon, Button } from 'antd';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    height: 58px;
    width: 100%;
    background-color: #F1FAEE;
    border-bottom: 1px solid #dbdbdb;
`;

const ContainerCheckAndRoutine = styled.div`
    height: 58px;
    display: flex;
    align-items: center;
    padding-left: 22px;
`;

const RoutineName = styled.h3`
    display: flex;
    align-items: center;
    height: 58px;
    margin: 0 0 0 5px;
    font-size: 1.2rem;
`;

const GroupImages = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 16px;
`;

const ImgGroupSinglePerson = styled.div`
    width: 24px;
    height: 24px;
    border: .5px solid white;
    border-radius: 50%;
    background-color: #dbdbdb;
    margin-left: -10px;
`;

const ContainerIcons = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: 8px;
`;

const IconAction = styled(Button)`

`;

function GroupRoutine({ routineName, person }) {
    return (
        <Container>
            <ContainerCheckAndRoutine>
                <Checkbox />
                <RoutineName>{routineName}</RoutineName>
                <GroupImages>
                    <ImgGroupSinglePerson />
                    {
                        [...Array(person)].map(() => <ImgGroupSinglePerson />)
                    }
                </GroupImages>
            </ContainerCheckAndRoutine>
            <ContainerIcons>
                <IconAction
                    type={'link'}
                    shape={'circle'}
                    size={'large'}>
                    <Icon type="edit" />
                </IconAction>
                <IconAction
                    type={'link'}
                    shape={'circle'}
                    size={'large'}>
                    <Icon type="pause" />
                </IconAction>
                <IconAction
                    type={'link'}
                    shape={'circle'}
                    size={'large'}>
                    <Icon type="delete" />
                </IconAction>
            </ContainerIcons>

        </Container>
    )
}

export default GroupRoutine
