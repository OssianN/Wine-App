import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { updateWine } from '../../actions/wineActions';
import WineForm from './WineForm';

const EditWine = props => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth)

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

  return (
    <div className='wineModal' style={props.showEditModal}>
      <WineForm
        method={editData}
        buttonName='Change Wine'
        show={props.setShowEditModal}
        position={props.position}
        pickedCard={props.pickedCard}
        titleValue={props.titleValue}
        setTitleValue={props.setTitleValue}
        countryValue={props.countryValue}
        setCountryValue={props.setCountryValue}
        yearValue={props.yearValue}
        setYearValue={props.setYearValue}
        checkedValue={props.checkedValue}
        setCheckedValue={props.setCheckedValue}
        setShowEditModal={props.setShowEditModal}
      />
    </div>
  )
}

export default EditWine;