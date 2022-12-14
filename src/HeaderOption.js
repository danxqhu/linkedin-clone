import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css';
import PropTypes from 'prop-types';

HeaderOption.propTypes = {
  avatar: PropTypes.bool,
  Icon: PropTypes.object,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  // console.log(user);
  function Ava() {
    if (avatar) {
      if (user && user.displayName) {
        return (
          <Avatar className="headerOption__icon" src={user.photoURL}>
            {user.displayName[0]}
          </Avatar>
        );
      } else {
        return <Avatar className="headerOption__icon"></Avatar>;
      }
    }
  }

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}

      <Ava></Ava>
      {/* {avatar && user && user.displayName && (
        <Avatar className="headerOption__icon" src={user.photoURL}>
          {user.displayName[0]}
        </Avatar>
      )} */}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
