import React from "react";
import logo from "../../assets/logo_transparent.png";

export default function Logo() {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        height={175}
        width={175}
        className="nav-link"
      />
    </>
  );
}
