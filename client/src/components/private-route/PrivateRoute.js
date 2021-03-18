import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, isAuthenticated, ...children }) => {
  const auth = useSelector(state => state.authReducers?.isAuthenticated)

  return auth === true
    ? <Route {...children} render={props => <Component {...props} />} />
    : <Redirect to="login" />;
}

export default PrivateRoute;