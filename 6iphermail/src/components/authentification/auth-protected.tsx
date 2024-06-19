import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './auth-context'; // Ensure this path is correct

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
