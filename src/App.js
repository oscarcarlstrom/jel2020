import React from 'react';
import MyMap from './Map'
import './App.css';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <MyMap />
      <Dashboard></Dashboard>
      <footer></footer>
    </div>
  );
}

export default App;
