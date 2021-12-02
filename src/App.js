import { useState, useEffect } from 'react';

import './App.css';

//import getCurrentWeather from './api/getCurrentWeather';
import usePosition from './hooks/usePosition';

import SearchForm from './components/SearchForm';

function App() {
  const [city, setSity] = useState('London');

  usePosition();

  useEffect(() => {
    console.log(city);
    //getCurrentWeather(city);
  }, [city]);

  const handleSearchValue = city => {
    setSity(city);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <SearchForm searchValueChange={city => handleSearchValue(city)} />
    </div>
  );
}

export default App;
