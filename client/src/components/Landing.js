import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

const Landing = () => {
  const auth = useSelector(state => state.auth.isAuthenticated)
  const history = useHistory();

  useEffect(() => {
    if(auth) {
      history.push('/dashboard');
    }
  });

  return (
    <div className='landing-page'>
      <h1 className="header">This is the wine we whine about</h1>
      <div className='landing-page-link-container'>
        <Link to='/register' className=' landing-page__link landing-page__link--colored'>Register</Link>
        <Link to='/login' className='landing-page__link'>Log in</Link>
      </div>
    </div>
  );
}

export default Landing;
