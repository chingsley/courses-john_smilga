import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-pu8wyk-g.us.auth0.com'
      clientId='GYsVn60CkUU6fa4yiwpRrT1KVL5KuzPh'
      // redirectUri={window.location.origin}
      cacheLocation='localstorage'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
