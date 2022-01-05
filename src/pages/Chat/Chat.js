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
import { textShorter } from '../../libs/helperFuncs';
import ActiveUser from '../../components/ActiveUser/ActiveUser';

const ENDPOINT = 'https://im-rudra-chat.herokuapp.com/';
let socket;

const Chat = () => {
  const { user } = useFirebase();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [scrollHeight, setScrollHeight] = useState(44);
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    if (!user?.email) return;
    const userDoc = {
      username: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
      timeStamp: Date.now()
    };
    socket = io.connect(ENDPOINT);
    socket.emit('join', userDoc);
    socket.on('message', (data) => setMessages((prev) => [...prev, data]));
    socket.on('join', (data) => {
      console.log(data);
      setActiveUsers(data);
    });
  }, [user]);
  const submitMessage = () => {
    if (!message.trim()) return;
    const messageDoc = {
      username: user.displayName,
      email: user.email,
      message,
      timeStamp: Date.now()
    };
    socket.emit('message', messageDoc);
    setMessage('');
    setScrollHeight(44);
  };

  const textAreaChangeHandler = (e) => {
    setMessage(e.target.value);
    setTimeout(() => {
      setScrollHeight(44);
      setScrollHeight(e.target.scrollHeight);
    }, 0);
  };

  const textAreaKeyPress = (e) => {
    if (e.code === 'Enter' && e.shiftKey) return;
    if (e.code === 'Enter') {
      e.preventDefault();
      submitMessage();
      setScrollHeight(44);
    }
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
          {activeUsers?.map((user) => (
            <ActiveUser key={user.id} user={user} />
          ))}
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
            {messages.map((msg) =>
              msg.email === user.email ? (
                <MessageMe message={msg} key={msg.timeStamp} />
              ) : (
                <MessageOther message={msg} key={msg.timeStamp} />
              )
            )}
          </div>
        </div>
        <div className="chat-box-container">
          <textarea
            className="message-field"
            type="text"
            placeholder="Search for people"
            name="message-text"
            onChange={textAreaChangeHandler}
            onKeyPress={textAreaKeyPress}
            value={message}
            style={{
              maxHeight: '90px',
              height: `${scrollHeight}px`,
              overflowY: scrollHeight > 91 ? 'auto' : 'hidden'
            }}
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
