import React from 'react';
import './App.css';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className='bodyHeader'>
      <div className="parte1">
        <Link id='link' to="/">Principal</Link>
        <Link id='link' to="/contato">Contato</Link>
      </div>
      <div className="parte2">
        <img src={logo} alt="Logo"/>
      </div>
    </div>
    </header>
  );
}

export default Header;
