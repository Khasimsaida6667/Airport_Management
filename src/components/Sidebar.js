import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul className='te1'>
          <li><i className="icon-home"></i>Home</li>
          <li><i className="icon-dashboard"></i>Dashboard</li>
          <li>Services</li>
          <ul>
            <li className='te'>Airports</li>
            <li>Videos</li>
          </ul>
          <li>Others</li>
          <ul className='te1'>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
          </ul>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
