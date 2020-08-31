import React from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Issues Tracker
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          View issue trackers
        </Link>
        <Auth />
      </div>
    </div>
  );
};

export default Header;
