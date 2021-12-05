import { alert, defaults } from '@pnotify/core';

defaults.styling = 'material';
defaults.icons = 'material';
defaults.delay = 1000;

const Alert = text => {
  return alert({
    text: text,
    hide: true,
    delay: 600,
    sticker: false,
    closer: true,
    dir1: 'down',
  });
};

export default Alert;
