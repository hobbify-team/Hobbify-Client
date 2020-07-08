import React from 'react';
import styled from 'styled-components';
import { Tabs, Button, Icon } from 'antd';
import GroupsRoutines from './GroupsRoutines';

/* fake routines */
import { groupalRoutines } from '../../fixtures/exampleDB';

const GeneralContainer = styled.div`
    position: relative;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 48px;
`;

const ContainerFAB = styled.div`
    position: fixed;
    bottom: 64px;
    right: 16px;
`;

/* This is about the AppBar */

const AppBarTop = styled.div`
    height: 40px;
    background-color: #1D3557;
    color: #F3FFBD;
    padding-left: 18px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100vw;
`;

const AppBarText = styled.p`
    margin: 0;
`;

/* This is about the AppBar */



/* Here starts tabs styles */

const Tab = styled(Tabs)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

/* Here finishes tabs styles */

const ContainerMainScreen = styled.div`
    width: 100vw;
`;

function GroupsLayout({ routineName = 'def routine' }) {

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    return (
        <GeneralContainer>

            <Container>
                <Tab defaultActiveKey="1" onChange={callback} size={'default'}>
                    <TabPane tab="ROUTINES" key="1">
                        <ContainerMainScreen>
                            <GroupsRoutines routines={groupalRoutines} />
                        </ContainerMainScreen>
                    </TabPane>
                    <TabPane tab="FRIENDS" key="2">
                        FRIENDS
                    </TabPane>
                </Tab>
            </Container>

            <ContainerFAB>
                <Button
                    type="primary"
                    size="large"
                    shape="circle"
                    onClick={() => console.log('plus')}
                >
                    <Icon type="plus" />
                </Button>
            </ContainerFAB>

            <AppBarTop>
                <AppBarText>Hobbify.app</AppBarText>
            </AppBarTop>

        </GeneralContainer>
    )
}

export default GroupsLayout