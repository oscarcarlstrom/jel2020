import React, { useState } from 'react';
import Map from './Map';
import './App.css';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    text-align: left;
`;

const App = ({ socket }) => {
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
      <div className="ui row" style={{paddingBottom: 0}}>
        <div className="thirteen wide column" style={{padding: 0}}>
          <Map position={[59.436691, 10.594773]}/>
        </div>
        <div className="ui inverted vertical labeled ui overlay right visible sidebar menu three wide column" style={{padding: 0}}>
          <a className="item" style={{padding: "1em"}}>
            <div className="header">ID: 1</div>
            <div className="description">Data: { data.length }</div>
          </a>
       </div>
      </div>
    </div>
  );
};

export default App;

