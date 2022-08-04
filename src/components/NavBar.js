import React from "react";
import { NavLink } from "react-router-dom";



function NavBar() {
  return (
  <div className="navbar">
        <h3 className="tab"> 
        <NavLink
        to="/intervalList" >
          Interval List
        </NavLink>
        </h3>
        <h3 className="tab"> 
        <NavLink
          to="/settings">
            Settings
        </NavLink>
        </h3>
        <h3 className="tab">
          <NavLink to="/analysis">
            Analysis
          </NavLink>
        </h3>
  </div>
  );
}

export default NavBar;
