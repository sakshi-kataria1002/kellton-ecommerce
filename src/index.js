import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './index.scss'

import { Provider } from 'react-redux'
import store from './redux/store'

// Used for routing or navigating in the app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  {/**Browser Router Higher Order Component sending
    routing properties to APP Component */}
    <Provider store = {store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
