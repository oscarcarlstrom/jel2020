import React, { useState } from 'react';
import { Progress } from 'semantic-ui-react'
import { calculatePercent, state } from './state.js'
import Map from './Map';
import './App.css';

const App = ({ socket }) => {
  const [data, setData] = useState(state);
  const [position, setPosition] = useState([59.436691, 10.594773]);

  
  socket.onmessage = function(event) {
    console.log(`[message] Data received from server: ${event.data}`);
    socket.send('Client got data');
    
    const message = JSON.parse(event.data);
    const newState = {
      ...state
    };

    if (message.appId === "AIR_PRESS") {
      newState[message.id].location = [newState[message.id].location[0] + 0.001, newState[message.id].location[1]];
      setPosition(newState[message.id].location);
    }
    else if (message.appId === "TEMP") {
      newState[message.id].location = [newState[message.id].location[0], newState[message.id].location[1] + 0.001];
      setPosition(newState[message.id].location);
    }

    let audioElement = new Audio('alertsound.mp3');

    if(message.appId !== "BUTTON") {
      newState[message.id][message.appId] = message.data;
    } else if (message.appId === "BUTTON" && message.data === 1) {
      newState[message.id][message.appId] = message.data;
      audioElement.play();
      setTimeout(() => {
        audioElement.pause();
      }, 3000);
    }

    newState[message.id]['percent'] = calculatePercent(newState[message.id])

    setData(newState)
  };
  
  const positionClick = (location) => {
    setPosition(location);
  };

  const sideBarItems = Object.values(data).map((device, index) => {
    return (
      <a
      href={`#${device.name}`}
      key={`${device.appId}-${index}`}
      className="item"
      style={{padding: "1em", paddingRight: "2em"}}
      onClick={() => positionClick(device.location)}>
        <div className="header">{device.name}</div>
        <Progress percent={device.percent} indicating />
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

