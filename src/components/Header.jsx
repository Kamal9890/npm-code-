import React from 'react';
import './stylesheet/Header.css';

const Header = () => {
  return (
    <header className="header">
      <input type="text" placeholder="Search..." className="search-input" />
      <div className="title">DESIGN FOR LIFE</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#podcast">Podcast</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
