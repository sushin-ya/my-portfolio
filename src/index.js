import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/orbitron';
import '@fontsource/orbitron/700.css';
import '@fontsource/orbitron/900.css';
import '@fontsource/quicksand';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
