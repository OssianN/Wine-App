import React, { useState } from 'react';

const Card = props => {
  const [showRemove, setShowRemove] = useState({display: 'none'})
  const id = `${props.x}:${props.y}`;

  const handleRemove = e => {
    fetch('http://localhost:5000/wines', {
      method: 'DELETE',
      mode: 'cors',
      headers: {  
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({shelf: props.x, row: props.y})
    }).then(() => {
      props.setUpdateOnPost(props.updateOnPost + 1);
    }).catch(err => alert('A server error occured.', err));
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
      <p>{props.year}</p>
    </div>
  );
};

export default Card;