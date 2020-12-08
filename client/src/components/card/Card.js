import React from 'react';
import axios from 'axios';

const Card = props => {
  const id = `${props.x}:${props.y}`;

  const handleRemove = async e => {
    e.stopPropagation();
    if (window.confirm(`Do you want to delete ${props.title}`)) {
      try {
        await axios.delete('/wines', {data: {shelf: props.x, row: props.y}});
        props.setUpdateOnPost(props.updateOnPost + 1);
      } catch(err) {
        alert('A server error occured.', err);
      }
    } else {
      return;
    };
  };

  const handleEdit = async e => {
    props.setPosition([props.x, props.y]);
    props.setPickedCard({title: props.title, country: props.country, year: props.year});
    props.setShowEditModal({display: "flex"});
  };

  return (
    <div className='card' id={id} onClick={handleEdit}>
      <button className='removeButton' onClick={handleRemove}>&#10005;</button>
      <p className='cardPosition'>{`${props.x + 1}:${props.y + 1}`}</p>
      <h1 >{props.title}</h1>
      <h4 >{props.country}</h4>
      <p className='wineYear'>{props.year}</p>
    </div>
  );
};

export default Card;