import React, { useState } from 'react';
import { state } from './state.js'
import Map from './Map';
import './App.css';

const App = ({ socket }) => {
  const [data, setData] = useState(state);

  socket.onmessage = function(event) {
    console.log(`[message] Data received from server: ${event.data}`);
    socket.send('Client got data');
    
    const message = JSON.parse(event.data);
    const newState = {
      ...state
    };
    newState[message.id][message.appId] = message.data;

    setData(newState)
  };
  
  const sideBarItems = Object.values(data).map((device, index) => {
    return (
      <a href={`#${device.name}`} key={`${device.appId}-${index}`} className="item" style={{padding: "1em"}}>
        <div className="header">{device.name}</div>
      </a>
    )
  });

  return (
    <div className="ui grid">
      <div className="ui row" style={{paddingBottom: 0}}>
        <div className="thirteen wide column" style={{padding: 0}}>
          <Map data={data} />
        </div>
        <div className="ui inverted vertical labeled ui overlay right visible sidebar menu three wide column" style={{padding: 0}}>
          { sideBarItems }
       </div>
      </div>
    </div>
  );
};

export default App;

