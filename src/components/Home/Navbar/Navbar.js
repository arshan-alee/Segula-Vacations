import React, { useState } from "react";
import "./Navbar.css";
import { LinksData } from "../../../data";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar__container">
      <h1>LOGO HERE</h1>
      <div className="menu__icon" onClick={handleToggleLinks}>
        {showLinks ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`links ${showLinks ? "show__links" : ""}`}>
        {LinksData.map((link) => (
          <Link to={link.linkTo} key={link.linkText}>
            {link.linkText}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
