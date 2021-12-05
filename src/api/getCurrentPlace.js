import axios from 'axios';

axios.defaults.baseURL = 'https://www.metaweather.com/api/';

const getCurrentPlace = async ({ latitude, longitude }) => {
  try {
    const { data } = await axios.get(
      `/api/location/search/?lattlong=${latitude},${longitude}`,
    );

    return data[0];
  } catch (error) {
    console.log(error);
  }
};

export default getCurrentPlace;
