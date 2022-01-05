import React from 'react';
import './SearchResult.css';
import SearchPerson from '../SearchPerson/SearchPerson';

const SearchResult = () => {
  return (
    <div className="search-result">
      <SearchPerson />
      <SearchPerson />
      <SearchPerson />
    </div>
  );
};

export default SearchResult;
