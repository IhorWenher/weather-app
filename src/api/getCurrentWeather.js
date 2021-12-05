import axios from 'axios';

axios.defaults.baseURL = 'https://www.metaweather.com/api/';

const getCurrentWeather = async id => {
  try {
    const { data } = await axios.get(`location/${id}/`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getCurrentWeather;
