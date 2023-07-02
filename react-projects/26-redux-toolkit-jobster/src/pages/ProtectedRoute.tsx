import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../app/store';

const ProtectedRoute = ({ children }: { children: React.ReactNode; }) => {
  const { user } = useSelector((store: RootState) => store.user);
  if (!user) return <Navigate to='/landing' />;
  return <>{children}</>;
};

export default ProtectedRoute;