import React from 'react'
import Navigation from './Navigation';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <a href="/" className="logo">
        <span>Movie App</span>
      </a>
      <Navigation/>
    </div>
  )
}

export default Header;