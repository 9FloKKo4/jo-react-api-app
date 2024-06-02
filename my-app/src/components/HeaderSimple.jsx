import React from 'react';
import '../styles/HeaderSimple.css'; 

const HeaderSimple = ({ isLoggedIn, handleLogin, handleLogout }) => {
  return (
    <header>
      <div className="header__logo">
        <img src="https://eu.ftp.opendatasoft.com/paris2024/emblem-white.svg" alt="Logo" className="header__logo-img" />
      </div>
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

export default HeaderSimple;
