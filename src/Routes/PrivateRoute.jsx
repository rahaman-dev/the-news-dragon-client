import React, { useContext } from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Spinner from "react-bootstrap/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, lodging } = useContext(AuthContext);
  const location = useLocation();

  if (lodging) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
