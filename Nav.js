import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'black',
  };

  return (
    <nav>
      <img
        src='./images/newt.png'
        className='animated zoomIn slow '
        alt='Transparent MDB Logo'
      />
      <ul className='nav-links'>
        {' '}
        <Link style={navStyle} to='/home'>
          <li>Home</li>
        </Link>
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/project'>
          <li>Project</li>
        </Link>
        <Link style={navStyle} to='/service'>
          <li>Service</li>
        </Link>
        <Link style={navStyle} to='/client'>
          <li>Client</li>
        </Link>
        <Link style={navStyle} to='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
