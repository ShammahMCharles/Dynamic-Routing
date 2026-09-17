import { useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "../context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const context = useContext(AuthContext);

  if (!context) {
    return null;
  }

  const { isAuthenticated } = context;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}