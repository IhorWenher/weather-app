import axios from 'axios';
import { alert, defaults } from '@pnotify/core';

defaults.styling = 'material';
defaults.icons = 'material';
defaults.delay = 1000;

axios.defaults.baseURL = 'https://www.metaweather.com/api/';

const getCityId = async city => {
  try {
    const { data } = await axios.get(`/api/location/search/?query=${city}`);

    return data[0].woeid;
  } catch (error) {
    alert({
      text: 'Please, check and enter city name!',
      hide: true,
      delay: 2000,
      sticker: false,
      closer: true,
      dir1: 'down',
    });
  }
};

export default getCityId;
