import React from 'react';
import { useDispatch } from 'react-redux';
import wineSVG from './wine4.png';
import { setPickedWine } from '../../actions/setPickedWine';

const Card = ({ card, setShowEditModal, cardWidth }) => {
  const dispatch = useDispatch();

  const img = card.img ? card.img : wineSVG;
  const priceToNumber = !card.price || isNaN(card.price) ? '-' : `${Math.floor(parseInt(card.price))} kr`;

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
      <div className='card__text-container'>
        <a target="_blank" rel="noreferrer" href={card.vivinoUrl} className='card__vivino-url'>
          <h1 className='card__title'>{card.title}</h1>
          {card.country ? <p className='card__country-paragraph'>{card.country}</p> : ''}
        </a>
        <div className='card__info-container'>
          <span className='card__separaion-span'></span>
          {card.year ? <p className='card__info-paragraph'>{card.year}</p> : ''}
          {priceToNumber ? <p className='card__info-paragraph'>{priceToNumber}</p> : ''}
          {card.rating ? <p className='card__info-paragraph'>{card.rating}&#9733;</p> : ''}
        </div>
      </div>
    </figure>
  );
};

export default Card;