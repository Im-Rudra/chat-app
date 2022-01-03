import React from 'react';
import './Join.css';
import GoogleLogo from '../../static/img/google-logo.png';
import useFirebase from '../../hooks/useFirebase';

const Join = () => {

  const {signInWithGoogle} =useFirebase()
  return (
    <div className="join-container">
      <div onClick={signInWithGoogle} className="google-btn">
        <img className="google-logo" src={GoogleLogo} alt="Google-logo" />
      </div>
    </div>
  );
};

export default Join;
