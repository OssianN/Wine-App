import React from 'react';
import wineSVG from './wine4.png'

const Card = props => {
  const id = props._id;
  const img = props.img ? props.img : wineSVG;

  const handleEdit = async e => {
    props.setPosition([props.x, props.y]);
    props.setPickedCard({title: props.title, country: props.country, year: props.year, _id: id});
    props.setShowEditModal({display: "flex"});
  };

  console.log(props.cardWidth)

  return (
    <figure className='card' id={id} onClick={handleEdit} style={{width: `calc(${props.cardWidth}% - 30px)`}}>
      <header className='card-header'>
        <p className='card-header__position'>{`${props.x + 1}:${props.y + 1}`}</p>
      </header>
      <img className='card__img' alt='wine bottle' src={img}></img>
      <h1 className='card__title'>{props.title}</h1>
      <h4 className='card__country'>{props.country}</h4>
      <footer className='card__year'>{props.year}</footer>
    </figure>
  );
};

export default Card;