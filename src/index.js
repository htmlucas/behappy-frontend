import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

import './css/index.css';
import './css/pure.css';

import './img/favicon.ico';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
registerServiceWorker();
