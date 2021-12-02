import { useState, useEffect } from 'react';

import './App.css';

//import getCurrentWeather from './api/getCurrentWeather';
import usePosition from './hooks/usePosition';

import Container from './components/Container';
import SearchForm from './components/SearchForm';
import WeatherPanel from './components/WeatherPanel';

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
    <Container>
      <SearchForm searchValueChange={city => handleSearchValue(city)} />
      <WeatherPanel />
    </Container>
  );
}

export default App;
