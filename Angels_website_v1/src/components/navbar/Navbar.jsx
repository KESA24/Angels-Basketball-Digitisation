/* eslint-disable */
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../../angelogo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="angels__navbar ">
      <div className="angels__navbar-links">
        <div className="angels__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="angels__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wangels">Team</a></p>
          <p><a href="#possibility">Schedule</a></p>
          <p><a href="#features">News and Features</a></p>
          <p><a href="#blog">Community</a></p>
          <p><a href="#blog">Store</a></p>
          <p><a href="#blog">Membership</a></p>
        </div>
        <div className="angels__navbar-socials>">
          {/* <div>
            <p>We are social!</p>
          </div> */}
          <a href="https://twitter.com/angelsbclub256"><FacebookOutlinedIcon className="angels__navbar__socials_icons" /></a>
          <a href="https://twitter.com/angelsbclub256"><TwitterIcon className="angels__navbar__socials_icons" /></a>
          <a href="https://www.instagram.com/angelsbasketball256/"><YouTubeIcon className="angels__navbar__socials_icons" /></a>
          <a href="https://www.instagram.com/angelsbasketball256/"><InstagramIcon className="angels__navbar__socials_icons" /></a>
        </div>
      </div>
      {/* <div className="angels__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
      <div className="angels__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="angels__navbar-menu_container scale-up-center">
          <div className="angels__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wangels">Team</a></p>
            <p><a href="#possibility">Schedule</a></p>
            <p><a href="#features">News and Features</a></p>
            <p><a href="#blog">Community</a></p>
            <p><a href="#blog">Store</a></p>
            <p><a href="#blog">Membership</a></p>
          </div>
          {/* <div className="angels__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div> */}
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
