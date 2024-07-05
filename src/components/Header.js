import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className='heding'>hava havai</h1>
      <div className="user-profile">
      <img src="/photo.png" alt="User avatar" className="avatar" />
    </div>
      {/* <h2>dbvrb</h2> */}
    </header>
  );
}

export default Header;
