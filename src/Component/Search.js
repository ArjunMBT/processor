import React, { useState } from 'react';
import './Ssearch.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
    setSearchQuery('');
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search Google"
        value={searchQuery}
        onChange={handleInputChange}
        className="input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default Search;
