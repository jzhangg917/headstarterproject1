import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import FunFact from './components/FunFact';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header />
          <Banner />
          <FunFact />
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
