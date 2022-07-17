import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt='img' />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">About Us</a></p>
          <p><a href="#possibility">Admission</a></p>
          <p><a href="#features">Academic</a></p>
          <p><a href="#contact">Contact Us</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
      <p><a href="https://www.facebook.com/">Sign In</a></p>
      <button type="button"><a href="https://www.facebook.com/">ERP Login</a></button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">About Us</a></p>
            <p><a href="#possibility">Admission</a></p>
            <p><a href="#features">Academic</a></p>
            <p><a href="#blog">Gallery</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
          <p>Sign in</p>            
          <button type="button"> Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;