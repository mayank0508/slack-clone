import React from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <h1>HI BABY 🥶</h1>
      {/* Header */}
      <Header />
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
      </div>
      {/* React Router -> for code */}
    </div>
  );
}

export default App;
