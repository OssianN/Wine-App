import React from 'react';
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className='landing-page'>
      <h1 className="header">This is the wine we whine about</h1>
      <div className='landing-page-link-container'>
        <Link to='/register' className=' landing-page__link landing-page__link--colored'>Register</Link>
        <Link to='/login' className='landing-page__link'>Log in</Link>
      </div>
    </div>
  )
}

export default Landing;
