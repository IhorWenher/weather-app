import Styles from './WeatherPanel.module.css';

const WeatherPanel = ({ weather }) => {
  return (
    <div className={Styles.panel}>
      <div>{weather.title}</div>
      <div>{weather.air_pressure}</div>
      <div>{weather.applicable_date}</div>
      <div>{weather.humidity}</div>
      <div>
        {Math.round(weather.the_temp)}
        <sup>o</sup>C
      </div>
      <div>{weather.weather_state_abbr}</div>
      <div>{weather.weather_state_name}</div>
      <div>{weather.wind_direction}</div>
      <div>{weather.wind_direction_compass}</div>
      <div>{weather.wind_speed}</div>
    </div>
  );
};

export default WeatherPanel;
