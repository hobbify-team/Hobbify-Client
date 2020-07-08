import React from 'react'
import styled from 'styled-components'
import GroupsPicture from '../../../assets/groupslayout.svg'
import GroupRoutine from '../../../components/GroupRoutine';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
`;

const Title = styled.h3`
    color: #1D3557;
`;

const Image = styled.img`
    margin-top: 26px;
    margin-bottom: 26px;
`;

function GroupsRoutines({ routines }) {
    return (
        <Container>
            <Title>Your routines are better in group</Title>
            <figure>
                <Image src={GroupsPicture} />
            </figure>
            {
                routines.map(name => <GroupRoutine routineName={name[0]} person={name[1]} />)
            }
        </Container>
    )
}

export default GroupsRoutines
