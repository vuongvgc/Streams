import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="nav-link">
        Streamer
      </Link>
      <div id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
                All Streams
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
