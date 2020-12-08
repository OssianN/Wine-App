import React from 'react';
import axios from 'axios';
import WineForm from './WineForm';

const AddWine = props => {
  const postData = async (data) => {
    try {
      await axios.post('/wines',
        data
      );
      props.setUpdateOnPost(props.updateOnPost + 1);
    } catch(err) {
      alert('A server error occured.', err);
    };
  };

  return (
    <div className='wineModal' style={props.showAddModal}>
      <WineForm 
        method={postData}
        buttonName='Add Wine'
        show={props.setShowAddModal}
        position={props.position}
      />
    </div>
  )
}

export default AddWine;