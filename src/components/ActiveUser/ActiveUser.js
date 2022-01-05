import React from 'react';
import './ActiveUser.css';
import { textShorter } from '../../libs/helperFuncs';
import UserAvater from '../../static/img/user-avater.png';

const ActiveUser = ({ user }) => {
  return (
    <div className="single-active-user">
      <div className="user-avater">
        <img src={user ? user?.photoURL : UserAvater} alt="" />
      </div>
      <div className="active-user-info">
        <div className="active-user-name">
          {user ? textShorter(user?.username, 18) : textShorter()}
        </div>
        <div className="active-user-email">
          {user ? textShorter(user?.email, 18) : textShorter()}
        </div>
      </div>
    </div>
  );
};

export default ActiveUser;
