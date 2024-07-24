import React from 'react';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import FunFact from './FunFact';
import Sidebar from './Sidebar';

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
