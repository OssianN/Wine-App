import React, { useState } from 'react';
import '../../hamburger.css';

const Hamburger = ({ showSettings, setShowSettings }) => {
  const [isOpen, setIsOpen] = useState('hamburger--closed');

  const toggleSettings = () => {
    setShowSettings(!showSettings);

    isOpen === 'hamburger--closed'
      ? setIsOpen('hamburger--open')
      : setIsOpen('hamburger--closed')
  }


  return (
    <>
      <button className='hamburger' onClick={toggleSettings}>
        <div id='nav-icon2' className={`hamburger ${isOpen}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </>
  );
}

export default Hamburger;
