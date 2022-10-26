import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src={require('./assets/linkedin.png')} alt="" />
        {/* <svg>
          <image xlink:href="../public/linkedin.svg" />
        </svg> */}
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"></HeaderOption>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"></HeaderOption>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"></HeaderOption>
        <HeaderOption Icon={ChatIcon} title="Messaging"></HeaderOption>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"></HeaderOption>
        <HeaderOption avatar={true} title="me" onClick={logoutOfApp}></HeaderOption>
      </div>
    </div>
  );
}

export default Header;
