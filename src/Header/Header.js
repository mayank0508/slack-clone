import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
  return <div className="header">
      <div className="header__left">
          {/* Avator for the user */}
            <Avatar className="header__avatar" alt="Mayank" src="" />
          {/* Time icon */}
            <AccessTimeIcon />
      </div>
      <div className="header__search">
          {/* Search icon */}
          <SearchIcon />
          {/* Input */}
          <input placeholder="Mayank is just too good to handle" />
      </div>
      <div className="header__right">
          {/* Help */}
        <HelpOutlineIcon />
      </div>
  </div>;
}

export default Header;
