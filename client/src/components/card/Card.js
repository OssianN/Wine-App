import React from 'react';
import wineSVG from './wine4.png'

const Card = props => {
  const _id = props._id;
  const img = props.img ? props.img : wineSVG;

  const handleEdit = async e => {
    props.setPosition([props.x, props.y]);
    props.setPickedCard({title: props.title, country: props.country, year: props.year, _id});
    props.setShowEditModal({display: "flex"});
  };

  return (
    <figure className='card' id={_id} style={{width: `calc(${props.cardWidth}% - 20px)`}}>
      <header className='card-header'>
        <p className='card-header__position'>{`${props.x + 1}:${props.y + 1}`}</p>
        <button className='edit-card__button' onClick={handleEdit}>&#8942;</button>
      </header>
      <img className='card__img' alt='wine bottle' src={img}></img>
      <a target="_blank" rel="noreferrer" href={props.vivinoUrl} className='card__vivino-url'>
        <h1 className='card__title'>{props.title}</h1>
        <p className='card__info-paragraph'>Country: <br />{props.country}</p>
        <p className='card__info-paragraph'>Year: <br />{props.year}</p>
        <p className='card__info-paragraph'>Average rating: <br />{props.rating}</p>
      </a>
    </figure>
  );
};

export default Card;