import React from 'react';
import styled from 'styled-components';
import Map from './Map/Map';

const StyledDiv = styled.div`
    font-size: 2rem;
`;

const Dashboard = props => {
    return (
        <StyledDiv>
            <h1>Awesome heading</h1>
            <Map position={[59.436691, 10.594773]}/>
        </StyledDiv>
    );
};

export default Dashboard;