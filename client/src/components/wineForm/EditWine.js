import React from 'react';
import axios from 'axios';
import WineForm from './WineForm';

const EditWine = props => {
  const editData = async (data) => {
    try {
      await axios.put('/wines',
        data
      );
      props.setUpdateOnPost(props.updateOnPost + 1);
    } catch(err) {
      alert('A server error occured.', err);
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
      />
    </div>
  )
}

export default EditWine;