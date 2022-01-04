import React from 'react';
import './MessageOther.css';

const MessageOther = () => {
  return (
    <div className="message-container">
      <div className="message-other">
        <div className="message-text">Hi! How are you?</div>
        <div className="message-time">
          <i className="far fa-clock"></i>10:20 PM
        </div>
      </div>
    </div>
  );
};

export default MessageOther;
