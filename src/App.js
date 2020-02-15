import React, { useState } from 'react';
import Map from './Map';
import './App.css';

let state = {
  'prod/e58215b4-ab97-41b0-8abe-3fdf299bac4e/m/d/nrf-352656100826489/d2c': {
    name: 'Thingy 89'
  },
  'prod/e58215b4-ab97-41b0-8abe-3fdf299bac4e/m/d/nrf-352656100986572/d2c': {
    name: 'Thingy 72'
  }
}

const App = ({ socket }) => {
  const [data, setData] = useState(state);

  socket.onmessage = function(event) {
    console.log('event', event);
    console.log(`[message] Data received from server: ${event.data}`);
    socket.send('Client got data');
    
    const message = JSON.parse(event.data)
    state[message.id][message.appId] = message.data
    setData(state)
  };
  
  const sideBarItems = Object.values(data).map((device, index) => {
    console.log('device', device)
    return (
      <a key={`${device.appId}-${index}`} className="item" style={{padding: "1em"}}>
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

