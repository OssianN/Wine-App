import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCurrentUser } from '../actions/authActions';

const LogOutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    dispatch(setCurrentUser({}));
    localStorage.removeItem("jwtToken");
    history.push('/')
  }

  return (
    <button className='logout-button' onClick={handleLogOut}>
      log out
    </button>
  )
}

export default LogOutButton
