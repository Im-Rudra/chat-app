import React, { useState } from 'react';
import './SearchUsers.css';
import SearchResult from '../SearchResult/SearchResult';

const SearchUsers = () => {
  const [searchText, setSearchText] = useState('');
  const [searchRes, setSearchRes] = useState([]);

  const searchHandler = (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    const url = 'http://localhost:5000/searchUsers';
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ searchText })
    })
      .then((res) => res.json())
      .then((data) => {
        setSearchRes(data);
        console.log(data);
      });
  };

  return (
    <div className="search-container">
      <form action="" onSubmit={searchHandler}>
        <div className="search-form">
          <input
            className="search-field"
            type="text"
            placeholder="Search for people"
            name="search-text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button className="search-btn" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
      <SearchResult result={searchRes} />
    </div>
  );
};

export default SearchUsers;
