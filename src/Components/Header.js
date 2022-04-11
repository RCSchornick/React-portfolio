import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "./Style/Components.css";


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
</div>


  );
}
export default Header;