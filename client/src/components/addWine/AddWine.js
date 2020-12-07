import React, { useEffect, useRef } from 'react';
import axios from 'axios';

const AddWine = props => {
  const formFocus = useRef(null);
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

  const handleSubmit = e => {
    e.preventDefault();
    const wineTitle = e.target.children[2];
    const wineCountry = e.target.children[4];
    const wineYear = e.target.children[6];
    const wineShelf = props.position[0];
    const wineRow = props.position[1];
    const data = {
      title: wineTitle.value,
      country: wineCountry.value,
      year: wineYear.value,
      shelf: wineShelf,
      row: wineRow,
    }
    postData(data);
    props.setShowModal({display: 'none'});
  }

  const cancel = () => {
    props.setShowModal({display: 'none'});
  }

  const focus = () => {
    formFocus.current.focus();
  }

  useEffect(() => {
    focus()
  })

  return (
    <div className='addWineModal' style={props.showModal}>
      <form onSubmit={handleSubmit} className={'addWineForm'}>
        <button type='reset' onClick={cancel} className='cancelButton' >&#10005;</button>
        <label htmlFor='newWineName'>Wine Name</label>
        <input type='text' id="newWineName" ref={formFocus} />
        <label htmlFor='newWineCountry'>Country</label>
        <input type='text' id="newWineCountry" />
        <label htmlFor='newWineDesc'>Year</label>
        <input type='text' id="newWineDesc" />
        <button type='submit' id="addNewWineButton">
          Add Wine
        </button>
      </form>
    </div>
  )
}

export default AddWine;