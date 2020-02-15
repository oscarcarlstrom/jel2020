import React, { useState } from 'react';
import { state } from './state.js'
import Map from './Map';
import './App.css';

const App = ({ socket }) => {
  const [data, setData] = useState(state);
  const coordinates = {};
  const latLongs = [
    [59.436691, 10.594773],
    [59.45005, 10.63509]
  ]
  const [position, setPosition] = useState([59.436691, 10.594773]);

  
  socket.onmessage = function(event) {
    console.log('event', event);
    console.log(`[message] Data received from server: ${event.data}`);
    socket.send('Client got data');
    
    const message = JSON.parse(event.data);
    const newState = {
      ...state
    };
    newState[message.id][message.appId] = message.data;
    
    setData(newState)
  };
  
  const positionClick = (event) => {
    setPosition(coordinates[event.target.closest('a').getAttribute('href').substring(1)]);
  }

  const sideBarItems = Object.values(data).map((device, index) => {
    coordinates[device.name] = latLongs[index];
    return (
      <a
      href={`#${device.name}`}
      key={`${device.appId}-${index}`}
      className="item"
      style={{padding: "1em"}}
      onClick={event => positionClick(event)}>
        <div className="header">{device.name}</div>
      </a>
    )
  });

  return (
    <div className="ui grid">
      <div className="ui row" style={{paddingBottom: 0}}>
        <div className="thirteen wide column" style={{padding: 0}}>
          <Map data={data} position={position} />
        </div>
        <div className="ui inverted vertical labeled ui overlay right visible sidebar menu three wide column" style={{padding: 0}}>
          { sideBarItems }
       </div>
      </div>
    </div>
  );
};

export default App;

