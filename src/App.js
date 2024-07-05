import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
 import AirportDetails from './components/AirportDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/airport/:id" element={<AirportDetails />} />
          </Routes>
        </div>
      </div>
    </Router>


  );
}

export default App;


