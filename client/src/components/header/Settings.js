import React from 'react';
import LogOutButton from './LogOutButton';
import InitialSetup from './InitialSetup';
import './settings.css';
import { useSelector } from 'react-redux';

const Settings = ({ showSettings }) => {
  const leftMargin = showSettings ? null : '-400px';

  const { user } = useSelector(state => state.auth);

  return (
    <div className='settings-container' style={{ right: leftMargin }}>
      <p>{ user.name }</p>
      <LogOutButton />
      <InitialSetup />
    </div>
  )
}

export default Settings
