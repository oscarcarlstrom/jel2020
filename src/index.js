import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/leaflet/dist/leaflet.css'
import App from './App';

let socket = new WebSocket('ws://10.168.77.182:1880/ws/khan')

socket.onopen = function(e) {
  console.log('[open] Connection established')
  socket.send('Client is connected')
}

socket.onclose = function(event) {
  if (event.wasClean) {
    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`)
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    console.log('[close] Connection died')
    socket.send('Client disconnected')
  }
};

socket.onerror = function(error) {
  console.error(`[ws] ${error.message}`)
};

ReactDOM.render(<App socket={socket} />, document.getElementById('root'));
