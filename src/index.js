import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom'

// el BrowserRouter envuelve TODA la App en la línea 8 a la 10.
ReactDOM.render(
  <BrowserRouter>  
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
