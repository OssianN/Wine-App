import React from 'react';
import { useSelector } from 'react-redux';
import InitialSetup from './InitialSetup';
import './settings.css';


const Settings = ({ showSettings }) => {
  const leftMargin = showSettings ? null : '-400px';

  return (
    <div className='settings-container' style={{ right: leftMargin }}>
      <InitialSetup />
    </div>
  )
}

export default Settings
