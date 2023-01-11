import React from 'react'
import { Navigate } from 'react-router-dom';
import { User } from '../sharedTypes';

interface ProtectedRouteProps {
  user: User | null;
  children?: React.ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const { user, children } = props;
  if(!user) return <Navigate to='/' />
  
  return (
    <>
    {children}
    </>
  );
}

export default ProtectedRoute;