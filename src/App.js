import { useState, useEffect } from 'react';

import './App.css';

import getCityId from './api/getCityId';
import getCurrentPlace from './api/getCurrentPlace';
import getCurrentWeather from './api/getCurrentWeather';
import usePosition from './hooks/getPosition';
import Alert from './components/Alert/Alert';

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
      Alert(
        'We can not find you. Please enter city name or allow your location',
      );
    }

    if (latitude & longitude && !id) {
      getCurrentPlace({ latitude, longitude }).then(({ woeid }) =>
        setId(woeid),
      );
    }

    if (id && !city) {
      getCurrentWeather(id).then(data => {
        setWeatherObject({
          ...data.consolidated_weather[0],
          title: data.title,
        });
        setTemp(data.consolidated_weather[0].the_temp);
      });
    }

    if (city) {
      getCityId(city).then(data => {
        if (id !== data) {
          setSity(null);
          setId(data);
        }
      });
    }
  }, [latitude, longitude, error, city, id]);

  const handleSearchValue = city => {
    setSity(city);
  };

  const tempChanger = event => {
    const temperature = Math.round(event.target.value);
    setTemp(temperature);
  };

  return (
    <Container temp={temp}>
      <SearchForm searchValueChange={city => handleSearchValue(city)} />
      {weatherObject && <WeatherPanel weather={weatherObject} />}
      <RangeSlider temp={temp} onChange={tempChanger} />
    </Container>
  );
}

export default App;
