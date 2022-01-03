import React from 'react';
import './Join.css';
import GoogleLogo from '../../static/img/google-logo.png';

const Join = () => {
  return (
    <div className="join-container">
      <div className="google-btn">
        <img className="google-logo" src={GoogleLogo} alt="Google-logo" />
      </div>
    </div>
  );
};

export default Join;
