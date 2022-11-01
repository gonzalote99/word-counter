import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDom from 'react-dom';
import './style.css';

import App from './App';

 


ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
