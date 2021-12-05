import { useState, useEffect } from 'react';

import './App.css';

import getCityId from './api/getCityId';
import getCurrentPlace from './api/getCurrentPlace';
import getCurrentWeather from './api/getCurrentWeather';
import usePosition from './hooks/getPosition';

import Container from './components/Container';
import SearchForm from './components/SearchForm';
import WeatherPanel from './components/WeatherPanel';
import RangeSlider from './components/Slider/Slider';

function App() {
  const { latitude, longitude, error } = usePosition();
  const [city, setSity] = useState(null);
  const [id, setId] = useState(null);
  const [temp, setTemp] = useState(0);
  const [weatherObject, setWeatherObject] = useState(null);

  useEffect(() => {
    if (error === 'User denied Geolocation') {
      console.log('Danied geo');
    }

    if (latitude & longitude && !id) {
      console.log(latitude, longitude);
      console.log('Coord download');
      getCurrentPlace({ latitude, longitude }).then(({ woeid }) =>
        setId(woeid),
      );
      console.log('after Coord download');
    }

    if (id && !city) {
      console.log('id download');
      getCurrentWeather(id).then(data => {
        setWeatherObject({
          ...data.consolidated_weather[0],
          title: data.title,
        });
        setTemp(data.consolidated_weather[0].the_temp);
      });
    }

    if (city) {
      console.log('city download');
      getCityId(city).then(data => {
        setId(data);
        setSity(null);
      });
    }
  }, [latitude, longitude, error, city, id]);

  const handleSearchValue = city => {
    setSity(city);
  };

  const tempChanger = event => {
    setTemp(event.target.value);
    console.log(temp);
  };

  return (
    <Container>
      <SearchForm searchValueChange={city => handleSearchValue(city)} />
      {weatherObject && <WeatherPanel weather={weatherObject} />}
      <RangeSlider temp={temp} onChange={tempChanger} />
    </Container>
  );
}

export default App;
