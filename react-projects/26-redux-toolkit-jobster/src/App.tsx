import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Landing, ProtectedRoute } from './pages';
import { SharedLayout } from './pages/dashboard';

interface IAppProps {
  tab: string;
}
const App: React.FC<IAppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        />
        <Route path='landing' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
