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

  const handleRemove = async e => {
    if (window.confirm(`Do you want to delete ${props.pickedCard.title}`)) {
      try {
        await axios.delete('/wines', {data: {shelf: props.position[0], row: props.position[1]}});
        props.setUpdateOnPost(props.updateOnPost + 1);
      } catch (err) {
        alert('A server error occured.', err);
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
      />
    </div>
  )
}

export default EditWine;