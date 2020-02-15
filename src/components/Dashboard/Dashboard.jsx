import React, { useState } from 'react';
import Map from './Map/Map';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    text-align: left;
`;

const Dashboard = ({ socket }) => {
  const [data, setData] = useState([]);

  socket.onmessage = function(event) {
    console.log('event', event);
    console.log(`[message] Data received from server: ${event.data}`);
    socket.send('Client got data');
    setData([JSON.parse(event.data)])
  };

  const items = data.map((d, index) => {
    return <StyledButton key={`${d.appId}-${index}`} className="item">
      {d.appId} : {d.data}
    </StyledButton>
  });

  return (
    <div className="ui grid">
      <div className="ui row">
        <div className="thirteen wide column" style={{padding: 0}}>
          <Map position={[59.436691, 10.594773]}/>
        </div>
        <div className="ui inverted vertical labeled ui overlay right visible sidebar menu three wide column" style={{padding: 0}}>
          <div className="ui segment inverted">
            <div className="ui items">
              <a className="item">
                <div className="content">
                  <div className="header">ID: 1</div>
                  <div className="description">Data: { data.length }</div>
                </div>
              </a>
            </div>
          </div>
       </div>
      </div>
    </div>
  );
};

export default Dashboard;