import axios from 'axios';
import Alert from '../components/Alert/Alert';

axios.defaults.baseURL = 'https://www.metaweather.com/api/';

const getCurrentWeather = async id => {
  try {
    const { data } = await axios.get(`location/${id}/`);

    return data;
  } catch (error) {
    Alert('Сould not find city');
  }
};

export default getCurrentWeather;
