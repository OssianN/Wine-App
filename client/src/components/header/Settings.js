import React from 'react';
import LogOutButton from './LogOutButton';
import InitialSetup from './InitialSetup';
import { useSelector } from 'react-redux';
import './settings.css';

const Settings = ({ showSettings, setShowSettings }) => {
  const leftMargin = showSettings ? null : '-400px';

  const { user } = useSelector(state => state.auth);

  return (
    <div className='settings-container' style={{ right: leftMargin }}>
      <p>{ user.name }</p>
      <LogOutButton />
      <InitialSetup setShowSettings={setShowSettings} />
    </div>
  )
}

export default Settings
