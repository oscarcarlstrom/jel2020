import React, { useState } from 'react';
import styled from 'styled-components';
import Map from './Map/Map';

const StyledDiv = styled.div`
    font-size: 2rem;
`;

const Dashboard = ({ socket }) => {
  const [data, setData] = useState([])

  socket.onmessage = function(event) {
    console.log('event', event)
    console.log(`[message] Data received from server: ${event.data}`)
    socket.send('Client got data')
    setData([...data, event.data])
  }
  return (
    <div className="ui celled grid">
      <div className="thirteen wide column">
        <Map position={[59.436691, 10.594773]}/>
      </div>
        <div className="three wide column">
          <div className="ui pushable">
            <div className="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu">
            <div className="item">Data: { data.length }</div>
              <div className="item">
                ID: 1
              </div>
              <div className="item">
                ID: 2
              </div>
              <div className="item">
                ID: 3
              </div>
            </div>
          </div>
        </div>
    </div>
    );
};

export default Dashboard;