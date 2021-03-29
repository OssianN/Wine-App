import React from 'react';
import { useDispatch } from 'react-redux';
import wineSVG from './wine4.png';
import { setPickedWine } from '../../actions/setPickedWine';

const Card = ({ card, setShowEditModal, cardWidth }) => {
  const dispatch = useDispatch();

  const img = card.img ? card.img : wineSVG;
  const priceToNumber = isNaN(card.price) ? card.price : `${Math.floor(parseInt(card.price))}`;

  const handleEdit = async () => {
    dispatch(setPickedWine(card));
    setShowEditModal({display: "flex"});
  };

  return (
    <figure className='card' id={card._id} style={{width: `calc(${cardWidth}% - 20px)`}}>
      <header className='card-header'>
        <p className='card-header__position'>{`${card.shelf + 1}:${card.column + 1}`}</p>
        <button className='edit-card__button' onClick={handleEdit}>&#8942;</button>
      </header>
      <img className='card__img' alt='wine bottle' src={img}></img>
      <a target="_blank" rel="noreferrer" href={card.vivinoUrl} className='card__vivino-url'>
        <h1 className='card__title'>{card.title}</h1>
        {card.country ? <p className='card__info-paragraph'>{card.country}</p> : ''}
        {card.year ? <p className='card__info-paragraph'>{card.year}</p> : ''}
        {priceToNumber ? <p className='card__info-paragraph'>Price: <br />{priceToNumber}</p> : ''}
        {card.rating ? <p className='card__info-paragraph'>Rating: <br />{card.rating}</p> : ''}
      </a>
    </figure>
  );
};

export default Card;