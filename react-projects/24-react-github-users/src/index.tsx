import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-avbfeqf7b7tdtq7h.us.auth0.com'
      clientId='vKzsF6A3rGZE4ww2Ae4pIA0mICEcKmR1'
      // redirectUri={window.location.origin}
      cacheLocation='localstorage'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);
