import moment from 'moment';
import React from 'react';
import './MessageOther.css';

const MessageOther = ({ message }) => {
  const { username, message: text, timeStamp } = message;
  return (
    <div className="message-container message-other-container">
      <div className="message-other">
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

export default MessageOther;
