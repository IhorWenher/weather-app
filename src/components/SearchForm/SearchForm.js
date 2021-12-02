import { useState } from 'react';

import Styles from './SearchForm.module.css';

const SearchForm = ({ searchValueChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    searchValueChange(searchValue);
  };

  const handleNameChange = event => {
    setSearchValue(event.target.value.toLowerCase());
  };

  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter city name"
        onChange={handleNameChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
