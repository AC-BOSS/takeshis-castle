import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/takeshis-castle'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);