import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { updateWine, deleteWine } from '../../actions/wineActions'
import WineForm from './WineForm';

const EditWine = props => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth)
  const { _id } = props.pickedCard;

  const editData = async (data) => {
    try {
      const newWine = await axios.put('/wines', data);
      dispatch(updateWine(newWine.data))
      await axios.post('/users/addWine', { _id: newWine.data._id, email: user.email });
    } catch(err) {
      alert('A server error occured.', err);
      console.error(err)
    };
  };

  const handleRemove = async e => {
    if (window.confirm(`Do you want to delete ${props.pickedCard.title}`)) {
      try {
        dispatch(deleteWine(_id));
        props.setShowEditModal({ display: 'none' });
        await axios.delete('/wines', {data: { _id }});
        await axios.delete('/users/deleteWine', {data: { email: user.email, _id }});
      } catch (err) {
        alert('A server error occured.', err);
        console.error(err)
      }
    };
  };

  return (
    <div className='wineModal' style={props.showEditModal}>
      <WineForm
        method={editData}
        buttonName='Change Wine'
        show={props.setShowEditModal}
        position={props.position}
        pickedCard={props.pickedCard}
        handleRemove={handleRemove}
        titleValue={props.titleValue}
        setTitleValue={props.setTitleValue}
        countryValue={props.countryValue}
        setCountryValue={props.setCountryValue}
        yearValue={props.yearValue}
        setYearValue={props.setYearValue}
        checkedValue={props.checkedValue}
        setCheckedValue={props.setCheckedValue}
      />
    </div>
  )
}

export default EditWine;