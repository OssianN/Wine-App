import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCurrentUser } from '../actions/authActions';

const LogOutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector(state => state.auth);

  const handleLogOut = () => {
    dispatch(setCurrentUser({}));
    localStorage.removeItem("jwtToken");
    history.push('/')
  }

  return (
    <div className='logout-container'>
      <button className='logout-button' onClick={handleLogOut}>
        log out
      </button>
      <p className='account-name-header'>{ user.name }</p>
    </div>
  )
}

export default LogOutButton
