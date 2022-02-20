import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <Link to="/">
        <img
          src="http://localhost:3000/rayo_logo.png"
          className="rayo-logo"
          alt="Rayo logo"
        />
      </Link>
    </header>
  );
}

export default Navbar;
