import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';

function App({ data }) {
  return (
    <div className="App">
      <Dashboard data={data}></Dashboard>
    </div>
  );
}

export default App;
