import React from "react";
import { NavLink } from "react-router-dom";



function NavBar() {
  return (
  <div className="navbar">
      <ul>
        <li> 
        <NavLink
        to="/intervalList" >
          Interval List
        </NavLink>
        </li>
        <li> 
        <NavLink
          to="/settings">
            Settings
        </NavLink>
        </li>
      </ul>
  </div>
  );
}

export default NavBar;
