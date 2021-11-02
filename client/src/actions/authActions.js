import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types'

export const registerUser = (userData, history) => async dispatch => {
  try {
    await axios.post('/users/register', userData)
    history.push('/login')
    dispatch({
      type: GET_ERRORS,
      payload: {},
    })
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    })
  }
}

export const loginUser = userData => async dispatch => {
  axios
    .post('/users/login', userData)
    .then(res => {
      const { token } = res.data
      localStorage.setItem('jwtToken', token)
      setAuthToken(token)
      const decoded = jwt_decode(token)
      dispatch(setCurrentUser(decoded))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    )
}

export const setUserStorage = token => dispatch => {
  localStorage.setItem('jwtToken', token)
  setAuthToken(token)
  const decoded = jwt_decode(token)
  dispatch(setCurrentUser(decoded))
}

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  }
}

export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  }
}

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken')
  setAuthToken(false)
  dispatch(setCurrentUser({}))
}
