import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/1/17/Rayo_Vallecano_logo.png"
          className="rayo-logo"
          alt="Rayo logo"
        />
      </Link>
    </header>
  );
}

export default Navbar;
