import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">Logo</div>
        <div className="home">
          <Link to={"/home"}>Home</Link>
        </div>
        <div className="student">
          <Link to={"/"}>Student</Link>
        </div>
        <div className="contact">
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
