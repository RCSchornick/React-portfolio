import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "./Components.css";


function Header() {
  return (


  <div className="Header">
      <ul>
          <li>
              <Link activeClassName="active" isActive={()=> window.location.name === "/About"} to="/About">
              About
              </Link>
          </li>
          <li>
              <Link activeClassName="active" isActive={()=> window.location.name === "/Contact"} to="/Contact">
              Contact
              </Link>
          </li>
          <li>
              <Link activeClassName="active" isActive={()=> window.location.name === "/Portfolio"} to="/Portfolio">
              Portfolio
              </Link>
          </li>

      </ul>
    {/* <a href="https://github.com/RCSchornick"><img src={require("./github.png")} style={{ height: 45, width: 35, paddingBottom: 10 }} alt="GitHub" /></a>
    <br></br>
    <a href="https://www.linkedin.com/in/rachel-claire-schornick-b10039234"><img src={require("./LinkedIn.png")} style={{ height: 38, width: 28, margin: 10, paddingBottom: 10 }} alt="LinkedIn" /></a> */}
</div>


  );
}
export default Header;