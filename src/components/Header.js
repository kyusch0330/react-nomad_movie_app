import React from 'react'
import Navigation from './Navigation';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to ="/" className="logo">
        <span>Movie App</span>
      </Link>
      <Navigation/>
    </div>
  )
}

export default Header;