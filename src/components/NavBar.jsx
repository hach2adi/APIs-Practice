import React from "react";
import "../App";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>Bookly.</h1>
      </div>
      <div>
        <Link to="/favorites">
          <h3>Your Favorites</h3>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
