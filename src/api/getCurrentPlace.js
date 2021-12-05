import axios from 'axios';
import Alert from '../components/Alert/Alert';

axios.defaults.baseURL = 'https://www.metaweather.com/api/';

const getCurrentPlace = async ({ latitude, longitude }) => {
  try {
    const { data } = await axios.get(
      `location/search/?lattlong=${latitude},${longitude}`,
    );

    return data[0];
  } catch (error) {
    Alert('Сould not find you');
  }
};

export default getCurrentPlace;
