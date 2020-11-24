import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from './GoogleAuth';
const Header = () => {
  return (
    <nav className="row justify-content-around p-2">
      <Link to="/" className="nav-link">
          Streamer
      </Link>
      <div className="row">
        <Link to="/" className="nav-link">
                  All Streams
        </Link>
        <GoogleAuth />
      </div>
    </nav>
  );
};
export default Header;
