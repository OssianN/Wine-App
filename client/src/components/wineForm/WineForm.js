import React, { useRef, useEffect, useState } from 'react';

const WineForm = (props) => {
  const [showDelete, setShowDelete] = useState('none')
  const titleInput = useRef(null);
  const countryInput = useRef(null);
  const yearInput = useRef(null);

  const cancel = () => {
    props.show({display: 'none'});
  }

  const focus = () => {
    titleInput.current.focus();
  };

  const preFillForm = () => {
    const { title, country, year } = props.pickedCard || '';
    if (title || country || year) {
      titleInput.current.value = title || '';
      countryInput.current.value = country || '';
      yearInput.current.value = year || '';
    } else {
      return false;
    }
  };
  
  const validate = () => {
    if (isNaN(yearInput.current.value)) {
      return false;
    };
    return true;
  };

  const clearForm = () => {
    titleInput.current.value = '';
    countryInput.current.value = '';
    yearInput.current.value = '';
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      const data = {};
      data.title = e.target.children[2].value;
      data.country = e.target.children[4].value;
      data.year = e.target.children[6].value;
      data.shelf = props.position[0];
      data.row = props.position[1];
      props.method(data);
      props.show({display: 'none'});
      clearForm();
    } else {
      alert('The year must be entered as a number.')
    };
  };

  const handleShowDelete = () => {
    if (props.buttonName === 'Change Wine') {
      setShowDelete('block');
    } else {
      setShowDelete('none');
    }
  };

  useEffect(() => {
    preFillForm();
    handleShowDelete();
    focus();
  });

  return (
    <form onSubmit={handleSubmit} className='wineForm'>
      <button type='reset' onClick={cancel} className='cancelButton' >&#10005;</button>
      <label htmlFor='newWineName'>Wine Name</label>
      <input type='text' id="newWineName" ref={titleInput} />
      <label htmlFor='newWineCountry'>Country</label>
      <input type='text' id="newWineCountry" ref={countryInput} />
      <label htmlFor='newWineDesc'>Year</label>
      <input type='text' id="newWineDesc" ref={yearInput} />
      <button type='submit' id="editWineButton">
        {props.buttonName}
      </button>
      <button style={{display: showDelete}} className='removeButton' onClick={props.handleRemove}>Delete Wine</button>
    </form>
  )
}

export default WineForm;