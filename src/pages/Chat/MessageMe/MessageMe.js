import React from 'react';
import './MessageMe.css';

const MessageMe = () => {
  return (
    <div className="message-container">
      <div className="message-me">
        <div className="message-text">Hi! How are you?</div>
        <div className="message-time">
          <i className="far fa-clock"></i>10:20 PM
        </div>
      </div>
    </div>
  );
};

export default MessageMe;
