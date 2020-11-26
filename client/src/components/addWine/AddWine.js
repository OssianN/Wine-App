import React from 'react';
import axios from 'axios';

const AddWine = props => {
  const postData = async (data) => {
    try {
      await axios.post('http://localhost:5000/wines',
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
    props.setDisplayForm('hideWineForm');
  }

  const cancel = () => {
    props.setDisplayForm('hideWineForm');
  }

  return (
    <form onSubmit={handleSubmit} className={props.displayForm}>
      <button type='reset' onClick={cancel} className='cancelButton' >&#10005;</button>
      <label htmlFor='newWineName'>Wine Name</label>
      <input type='text' id="newWineName" />
      <label htmlFor='newWineCountry'>Country</label>
      <input type='text' id="newWineCountry" />
      <label htmlFor='newWineDesc'>Year</label>
      <input type='text' id="newWineDesc" />
      <button type='submit' id="addNewWineButton">
        Add Wine
      </button>
    </form>
  )
}

export default AddWine;