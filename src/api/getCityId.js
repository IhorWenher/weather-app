import axios from 'axios';
import Alert from '../components/Alert/Alert';

axios.defaults.baseURL = 'https://www.metaweather.com/api/';

const getCityId = async city => {
  try {
    const { data } = await axios.get(`/api/location/search/?query=${city}`);

    return data[0].woeid;
  } catch (error) {
    Alert('Please, check and enter city name!');
  }
};

export default getCityId;
