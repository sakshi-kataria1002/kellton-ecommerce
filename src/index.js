import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './index.scss'

// Used for routing or navigating in the app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  {/**Browser Router Higher Order Component sending
    routing properties to APP Component */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
