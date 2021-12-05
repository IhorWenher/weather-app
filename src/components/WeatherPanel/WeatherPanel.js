import Styles from './WeatherPanel.module.css';

const WeatherPanel = ({ weather }) => {
  const imageUrl = `https://www.metaweather.com/static/img/weather/png/64/${weather.weather_state_abbr}.png`;

  return (
    <div className={Styles.panel}>
      <img
        className={Styles.img}
        src={imageUrl}
        alt={weather.weather_state_abbr}
      />
      <div className={Styles.name}>{weather.title}</div>
      <div className={Styles.pressure}>{weather.air_pressure}</div>
      <div className={Styles.date}>{weather.applicable_date}</div>
      <div className={Styles.humidity}>Humidity {weather.humidity}</div>
      <div className={Styles.temp}>
        Temp {Math.round(weather.the_temp)}
        <sup>o</sup>C
      </div>
    </div>
  );
};

export default WeatherPanel;
