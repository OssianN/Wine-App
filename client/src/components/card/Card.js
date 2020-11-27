import React, { useState } from 'react';
import axios from 'axios';

const Card = props => {
  const [showRemove, setShowRemove] = useState({display: 'none'})
  const id = `${props.x}:${props.y}`;

  const handleRemove = async () => {
    try {
      await axios.delete('/wines', {data: {shelf: props.x, row: props.y}});
      props.setUpdateOnPost(props.updateOnPost + 1);

    } catch(err) {
      alert('A server error occured.', err);
    }
  };

  const handleShowRemove = () => {
    setShowRemove({display: 'flex'});
  }

  const handleHideRemove = () => {
    setShowRemove({display: 'none'});
  }

  return (
    <div className='card' id={id} onMouseOver={handleShowRemove} onMouseOut={handleHideRemove}>
      <button className='removeButton' onClick={handleRemove} style={showRemove}>&#10005;</button>
      <p className='cardPosition'>{`${props.x + 1}:${props.y + 1}`}</p>
      <h1>{props.title}</h1>
      <h4>{props.country}</h4>
      <p className='wineYear'>{props.year}</p>
    </div>
  );
};

export default Card;