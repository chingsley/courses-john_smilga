import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { UserProvider } from './context/userContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN!}
    clientId={process.env.REACT_APP_CLIENT_ID!}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <App />
    </UserProvider>
  </Auth0Provider>
);
