import React, { useState } from 'react';
import Map from './Map/Map';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    text-align: left;
`;

const Dashboard = ({ socket }) => {
  const [data, setData] = useState([]);
  const [position, setPosition] = useState([59.436691, 10.594773]);
  
  const positionClick = (event) => {
    setPosition([position[0] + 1, position[1] - 1]);
    console.log(event.target);
  }

  socket.onmessage = function(event) {
    console.log('event', event)
    console.log(`[message] Data received from server: ${event.data}`)
    socket.send('Client got data')
    setData([...data, JSON.parse(event.data)])
  }

  const items = data.map((d, index) => (
    <StyledButton
    key={`${d.appId}-${index}`}
    className="item"
    onClick={event => positionClick(event)}>
        {d.appId} : {d.data}
    </StyledButton>
  ));

  return (
    <div className="ui celled grid">
      <div className="thirteen wide column">
        <Map position={position}/>
      </div>
        <div className="three wide column">
          <div className="ui pushable">
            <div className="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu">
            <div className="item">Data: { data.length }</div>
              {items}
            </div>
          </div>
        </div>
    </div>
    );
};

export default Dashboard;