import React from 'react';
import AirportTable from './AirportTable';
import './MainContent.css';


function MainContent() {
  return (
    <main className="main-content">
        <div className='top-con'>
      <h2>Airports</h2><div>
      <button className="add-button">+ Add new</button></div></div>
      <AirportTable />
    </main>
  );
}

export default MainContent;
