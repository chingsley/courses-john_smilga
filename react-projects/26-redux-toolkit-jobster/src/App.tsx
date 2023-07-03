import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Landing, ProtectedRoute, Register } from './pages';
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
        <Route path='register' element={<Register />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
};

export default App;
