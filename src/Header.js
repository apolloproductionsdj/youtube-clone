import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import './Header.css'; 
import { Link } from 'react-router-dom';


function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img 
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" 
            alt="" 
          />
        </Link>
      </div>

      <div className="header_input">
        <input 
          onChange={e => setInputSearch(e.target.value)} 
          value={inputSearch} 
          placeholder="Search" 
          type="text" 
        />
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header_inputButton" />
        </Link>
      </div>

      <div className="header_icons">
        <VideoCallSharpIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar 
          alt="ApolloDJ"
          src="https://yt3.ggpht.com/a-/AOh14GjXlUz37XrEpFaP0EXQMeyLhdR5dyoqeFcN7X3TFA=s88-c-k-c0xffffffff-no-rj-mo"
          className="header_icon"
        />
      </div>
    </div>
  );
}

export default Header;