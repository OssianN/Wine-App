import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { setUserStorage } from '../../actions/authActions';

const InitialSetup = () => {
  const { user } = useSelector(state => state.auth);
  const [inputValue, setInputValue] = useState({
    columns: user.columns,
    shelves: user.shelves,
  })
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    if(!inputValue.columns || !inputValue.shelves) {
      setError(true)
    } else {
      setError(false)
      const updatedUser = await axios.post('/users/addStorage', { columns: inputValue.columns, shelves: inputValue.shelves, email: user.email })
      const { token } = updatedUser.data;
      console.log(token)
      dispatch(setUserStorage(token))
    }
  }

  return (
    <div className='initial-setup-container'>
      <form className='initial-setup__form' onSubmit={handleSubmit}>
        {error ? <p>columns and shelves need to be grater than zero</p> : ''}
        <label>How many columns do you have?</label>
        <input
          name='columns'
          className='settings-form__input'
          type='number'
          placeholder={user.shelves}
          value={ inputValue.column }
          onChange={handleChange}>
        </input>
        <label>How many shelves do you have?</label>
        <input
          name='shelves'
          className='settings-form__input'
          type='number'
          placeholder={user.shelves}
          value={ inputValue.shelf }
          onChange={handleChange}>
        </input>
        <button type='submit' className='settings__button--confirm btn--enforced'>confirm</button>
        <p>You can change this whenever you want.</p>
      </form>
    </div>
  )
}

export default InitialSetup
