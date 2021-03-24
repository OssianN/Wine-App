import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Dashboard from "./components/dashboard/Dashboard";
import Landing from "./components/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const App = props => {
  const dispatch = useDispatch();

  if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      dispatch(logoutUser());
      window.location.href = "./login";
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/#/dashboard" >
          <Dashboard />
        </Route>
      </div>
    </BrowserRouter>
  )
};

export default App
