import React from 'react';
import { FaFacebook, FaHome, FaUserFriends, FaBell, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (

    <>
    <header className="facebook-header">
      {/* Logo Section */}
      <div className="header-left">
        <FaFacebook className="facebook-logo" />
      </div>

      {/* Search Bar Section */}
      <div className="header-center">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* Navigation Icons Section */}
      <div className="header-right">
        <FaHome className="header-icon" />
        <FaUserFriends className="header-icon" />
        <FaBell className="header-icon" />
        <div className="profile">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
