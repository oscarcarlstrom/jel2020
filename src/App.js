import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

function App({ socket }) {
  return (
    <div className="App">
      <Dashboard socket={socket}></Dashboard>
    </div>
  );
}

export default App;
