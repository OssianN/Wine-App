import React from 'react';

const AddWine = props => {
  const postData = async (data) => {
    fetch('http://localhost:5000/wines', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    props.setUpdateOnPost(!props.updateOnPost);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const wineTitle = e.target.children[1];
    const wineCountry = e.target.children[3];
    const wineDesc = e.target.children[5];
    const wineShelf = props.position[0];
    const wineRow = props.position[1];
    const data = {
      title: wineTitle.value,
      country: wineCountry.value,
      desc: wineDesc.value,
      shelf: wineShelf,
      row: wineRow,
    }
    postData(data);
    props.setDisplayForm('none');
  }

  return (
    <form style={{display: props.displayForm}} onSubmit={handleSubmit} className="addWineForm">
      <label htmlFor='newWineName'>Wine Name</label>
      <input type='text' id="newWineName" />
      <label htmlFor='newWineCountry'>Country</label>
      <input type='text' id="newWineCountry" />
      <label htmlFor='newWineDesc'>Description</label>
      <input type='text' id="newWineDesc" />
      <button type='submit' id="addNewWineButton">
        Add
      </button>
    </form>
  )
}

export default AddWine;