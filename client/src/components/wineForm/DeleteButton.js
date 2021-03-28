import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWine } from '../../actions/wineActions';
import axios from 'axios';

const DeleteButton = ({ buttonName, areYouSure, setAreYouSure, setShowEditModal, saveOrClearForm }) => {
  const [showDelete, setShowDelete] = useState('none');

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { _id } = useSelector(state => state.pickedWine);

  const handleShowDelete = () => {
    if (buttonName === 'Change Wine') {
      setShowDelete('grid');
    } else {
      setShowDelete('none');
    }
  };

  const handleRemove = async e => {
    try {
      dispatch(deleteWine(_id));
      setShowEditModal({ display: 'none' });
      handleAreYouSure();
      await axios.delete('/wines', {data: { _id }});
      await axios.delete('/users/deleteWine', {data: { email: user.email, _id }});
      saveOrClearForm();
    } catch (err) {
      alert('A server error occured.', err);
      console.error(err)
    }
  };

  const handleAreYouSure = () => setAreYouSure(!areYouSure);

  useEffect(() => {
    handleShowDelete();
  });

  return (
    <div className='delete-button-container' style={{display: showDelete}}>
      <button
        type='button'
        onClick={handleAreYouSure}
        className='btn--enforced btn--form-delete'
        style={{display: areYouSure ? 'none' : 'block'}}>
          Delete Wine
      </button>
      {areYouSure
      ? (
      <>
        <p className='confirm-delete__p'>Are you sure you want to delete this wine?</p>
        <button type='button' className='btn--enforced btn-delete--yes' onClick={handleRemove}>yes</button>
        <button type='button' className='flat-button--border btn-delete--no' onClick={handleAreYouSure}>no</button>
      </>
      )
      : ''
      }

    </div>
  )
}

export default DeleteButton
