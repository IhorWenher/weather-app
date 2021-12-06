import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
//import 'material-design-icons/iconfont/material-icons.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
