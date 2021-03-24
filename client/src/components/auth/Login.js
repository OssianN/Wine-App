import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from "../../actions/authActions";
import './auth.css'

const Login = props => {
  const [ inputValue, setInputValue ] = useState({
    email: '',
    password: '',
  });
  const [error, setError ] = useState(false)
  const history = useHistory();
  const auth = useSelector(state => state.auth.isAuthenticated)
  const authError = useSelector(state => state.errorState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authError) {
      return setError(authError)
    }
  }, [authError]);

  useEffect(() => {
    if(auth) {
      history.push('/dashboard')
    }
  });

  const handleChange = e => {
    const name = e.target.name;
    setInputValue({
      ...inputValue,
      [name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(inputValue))
    props.history.push('/dashboard')
  }

  return (
    <>
    <h1 className="header">This is the wine we whine about</h1>
    <form onSubmit={handleSubmit} className='auth-form'>
      {error.email ? <p>{ error.email }</p> : <p></p>}
      <input
        className='auth-form__input'
        onChange={handleChange} name='email'
        value={inputValue.email}
        placeholder='email'>
      </input>
      {error.password ? <p>{ error.password }</p> : <p></p>}
      <input
        className='auth-form__input'
        onChange={handleChange}
        name='password'
        value={inputValue.password}
        placeholder='password'
        type="password"></input>
      <button className='auth-form__submit-button btn--enforced' type="submit">log in</button>
    </form>
    </>
  )
}

export default Login;