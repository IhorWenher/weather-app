import { useState, useEffect } from 'react';

import './App.css';
import getCurrentWeather from './api/getCurrentWeather';

function App() {
  const [city, setSity] = useState('London');

  useEffect(() => {
    getCurrentWeather(city);
  }, [city]);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
