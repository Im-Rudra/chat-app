import moment from 'moment';
import React from 'react';
import './MessageMe.css';

const MessageMe = ({ message }) => {
  const { username, message: text, timeStamp } = message;
  return (
    <div className="message-container">
      <div className="message-me">
        <p>{username}</p>
        <div className="message-text">{text}</div>
        <div className="message-time">
          <i className="far fa-clock"></i>
          {moment(timeStamp).calendar()}
        </div>
      </div>
    </div>
  );
};

export default MessageMe;
