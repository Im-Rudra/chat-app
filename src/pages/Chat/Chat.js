import React from 'react';
import './Chat.css';
import UserAvater from '../../static/img/user-avater.png';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';

const ENDPOINT = 'http://localhost:5000/';
let socket;

const Chat = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    socket = io.connect(ENDPOINT);
    socket.on('message', (data) => {
      console.log(data);
    });
  }, []);

  const submitMessage = () => {
    socket.emit('message', { message });
    // console.log('message', message);
  };

  return (
    <div className="chat-container">
      <div className="people-wrapper">
        <div className="people-header">
          <h2>People</h2>
        </div>
        <div className="search-form">
          <input
            className="search-field"
            type="text"
            placeholder="Search for people"
            name="search-text"
          />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="recent-header">
          <h2>Recent</h2>
        </div>
      </div>
      <div className="chat-wrapper">
        <div className="chat-header-wrapper">
          <div className="chat-header-info">
            <div className="user-avater">
              <img className="user-img" src={UserAvater} alt="user avater" />
            </div>
            <div className="user-name">Ashikul Islam</div>
          </div>
        </div>
        <div className="messages-container">
          <div className="messages-secondary-container">
            <div className="message-container">
              <div className="message-me">
                <div className="message-text">Hi! How are you?</div>
                <div className="message-time">
                  <i className="far fa-clock"></i>10:20 PM
                </div>
              </div>
            </div>
            <div className="message-container">
              <div className="message-other">
                <div className="message-text">Hi! How are you?</div>
                <div className="message-time">
                  <i className="far fa-clock"></i>10:20 PM
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-box-container">
          <input
            className="message-field"
            type="text"
            placeholder="Search for people"
            name="message-text"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="message-btn" onClick={submitMessage}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
