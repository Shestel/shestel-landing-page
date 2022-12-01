import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import "./Navbar.css";
import logo from '../../assets/images/brand.webp'


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // const [color, setColor] = useState(false);
  // const changeColor = () => {
  //   if (window.scrollY >= 100) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };

  // window.addEventListener("scroll", changeColor);

  return (
    // <div className={color ? "header header-bg" : "header"}>
    <div className="header">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <ul className={click ? "nav-menu-home nav-active" : "nav-menu-home"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li> */}
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FiLogOut  className='navbar__icon'/>
        ) : (
          <HiOutlineMenuAlt2 className='navbar__icon'/>
        )}
      </div>
    </div>
  );
};

export default Navbar;
