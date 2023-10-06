import React from "react";
import Logo from "./Logo";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faCommentDots,
  faHome,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <Link to={"/home"} id="home" className="nav-link ">
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
      <a href={"/timeline"} className="nav-link">
        <FontAwesomeIcon icon={faCommentDots} /> Timeline
      </a>
      <a href={"/profile"} className="nav-link">
        <FontAwesomeIcon icon={faUser} /> Profile
      </a>
      <a href={"/logout"} className="nav-link">
        <FontAwesomeIcon icon={faSignOut} /> Logout
      </a>
    </nav>
  );
}
