import axios from 'axios';

axios.defaults.baseURL = 'https://www.metaweather.com/api/';

const getCityId = async city => {
  try {
    const { data } = await axios.get(`/api/location/search/?query=${city}`);

    return data[0].woeid;
  } catch (error) {
    console.log(error);
  }
};

export default getCityId;
