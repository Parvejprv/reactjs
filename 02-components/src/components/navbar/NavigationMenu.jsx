import React from "react";

const NavigationMenu = () => {
  return (
    <div className="navbar-right">
      <div className="left nav-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="right nav-menu"> 
          <ul>
            <li><a href="#login">Login</a></li>
            <li><a href="#signup">Sign Up</a></li>
          </ul>
      </div>
    </div>
  );
};

export default NavigationMenu;
