import React from 'react';
import MyMap from './Map'
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Sidebar from "./sidebar";

function App() {
  return (
    <div className="App">
      <MyMap />
      <Sidebar />
      <Dashboard></Dashboard>
      <footer></footer>
    </div>
  );
}

export default App;
