import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={require('./assets/linkedin.png')} alt="" />
        {/* <svg>
          <image xlink:href="../public/linkedin.svg" />
        </svg> */}
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"></HeaderOption>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"></HeaderOption>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"></HeaderOption>
        <HeaderOption Icon={ChatIcon} title="Messaging"></HeaderOption>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"></HeaderOption>
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/D5603AQHGiiB7_DH2KA/profile-displayphoto-shrink_200_200/0/1666686798265?e=1672272000&v=beta&t=QeWySe3PomFIv9sqcuCIGQ6H3MLhoZjmaK-Dv6BOJR0"
          title="me"
        ></HeaderOption>
      </div>
    </div>
  );
}

export default Header;
