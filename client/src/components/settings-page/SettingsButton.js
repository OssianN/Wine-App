import React from 'react'

const SettingsButton = ({ showSettings, setShowSettings }) => {

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  }

  return (
    <button className='toggle-setting flat-button--border' onClick={toggleSettings}>
      settings
    </button>
  )
}

export default SettingsButton
