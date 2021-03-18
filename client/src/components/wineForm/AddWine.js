import React from 'react';
import axios from 'axios';
import WineForm from './WineForm';
import { useDispatch, useSelector } from 'react-redux'
import { setWineArr } from '../../actions/wineActions';

const AddWine = props => {
  const dispatch = useDispatch();
  const wineArr = useSelector(state => state.wineArr)
  const { user } = useSelector(state => state.auth)

  const postData = async (data) => {
    try {
      const newWine = await axios.post('/wines', data);
      dispatch(setWineArr([...wineArr, newWine.data]));
      await axios.post('/users/addWine', { _id: newWine.data._id, email: user.email });
    } catch(err) {
      alert('A server error occured:', err.message);
    };
  };

  return (
    <div className='wineModal' style={props.showAddModal}>
      <WineForm 
        method={postData}
        buttonName='Add Wine'
        show={props.setShowAddModal}
        position={props.position}
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

export default AddWine;