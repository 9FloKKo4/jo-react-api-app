import React from 'react';
import '../styles/Header.css'; 


const Header = ({ isLoggedIn, handleLogin, handleLogout }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="https://eu.ftp.opendatasoft.com/paris2024/emblem-white.svg" alt="Logo" className="header__logo-img" />
      </div>
      <div className='text_header'><h2>Ressources Paris 2024</h2></div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><a href="/home" className="header__nav-link">Home</a></li>
          <li className="header__nav-item"><a href="/faq" className="header__nav-link">FAQ</a></li>
        </ul>
      </nav>
      <div className="header__auth">
        {isLoggedIn ? (
          <button className="header__button" onClick={handleLogout}>Logout</button>
        ) : (
          <button className="header__button" onClick={handleLogin}>Connexion</button>
        )}
      </div>
    </header>
  );
};

export default Header;
