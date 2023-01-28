import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

import { AppProvider } from './context';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>
);
