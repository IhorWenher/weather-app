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
    <div className={Styles.searchbar}>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <input
          className={Styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter city name"
          onChange={handleNameChange}
        />
        <button type="submit" className={Styles.button}>
          <span className={Styles.label}>Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
