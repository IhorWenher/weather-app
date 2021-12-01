import axios from 'axios';

axios.defaults.baseURL = 'https://www.metaweather.com/api/';

const getCurrentWeather = async city => {
  try {
    const { data } = await axios.get(`location/search/?query=${city}`);

    const weather = await axios.get(`location/${data[0].woeid}/`);

    return console.log(weather.data);
  } catch (error) {
    console.log(error);
  }
};

export default getCurrentWeather;
