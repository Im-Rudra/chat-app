import React from 'react';
import './Chat.css';
import UserAvater from '../../static/img/user-avater.png';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import MessageMe from './MessageMe/MessageMe';
import MessageOther from './MessageOther/MessageOther';
import SearchResult from '../../components/SearchResult/SearchResult';
import SearchUsers from '../../components/SearchUsers/SearchUsers';
import useFirebase from '../../hooks/useFirebase';
import { useDispatch } from 'react-redux';
import { messageReceiveFrontend } from '../../redux/slices/chatSlice';

const ENDPOINT = 'http://localhost:5000/';
let socket;

const Chat = () => {
  const { user } = useFirebase();
  const [message, setMessage] = useState('');
  //redux state 
  const dispatch = useDispatch()
  useEffect(() => {
    socket = io.connect(ENDPOINT);
    socket.on('message', (data) => {
      console.log(data);
      dispatch(messageReceiveFrontend(data))
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
        {/* <SearchUsers />
        <div className="recent-header">
          <h2>Recent</h2>
        </div> */}
        <div className="active-people">
          <div className="single-active-user">
            <div className="user-avater"></div>
          </div>
        </div>
      </div>
      <div className="chat-wrapper">
        <div className="chat-header-wrapper">
          <div className="chat-header-info">
            <div className="user-avater">
              <img
                className="user-img"
                src={user?.email ? user.photoURL : UserAvater}
                alt="user avater"
                style={{ borderRadius: '50%' }}
              />
            </div>
            <div className="user-name">
              {user?.email ? user.displayName : 'User Name'}
            </div>
          </div>
        </div>
        <div className="messages-container">
          <div className="messages-secondary-container">
            <MessageMe />
            <MessageOther />
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
