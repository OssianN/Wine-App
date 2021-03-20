import React from 'react';
import Card from '../card/Card.js';
import { useSelector } from 'react-redux';

const WineGrid = props => {
  const wineArr = useSelector(state => state.wineArr);
  const { user } = useSelector(state => state.auth);
  const cardArr = props.searchValue ? props.searchArr : wineArr;
  const cardWidth = (100 / user.columns);

  const createButton = (i, j) => {
    return (
      <div 
        key={`${i}:${j}`}
        className="add-wine__div"
        id={`${i}:${j}`}
        style={{width: `calc(${cardWidth}% - 10px)`}}>
        <div className='card-header card-header--left-margin'>
          <p className='card-header__position--dark'>{`${i + 1}:${j + 1}`}</p>
        </div>
        <button 
          onClick={handleClick}>
          &#43;
        </button>
      </div>
    );
  };

  const createCard = (card, i, j) => {
    return (
      <Card
        key={`${i}:${j}`}
        img={card.img}
        title={card.title}
        country={card.country}
        year={card.year}
        x={card.shelf}
        y={card.row}
        _id={card._id}
        cardWidth={cardWidth}
        setPosition={props.setPosition}
        updateOnPost={props.updateOnPost}
        setUpdateOnPost={props.setUpdateOnPost}
        setShowEditModal={props.setShowEditModal}
        showEditModal={props.showEditModal}
        setPickedCard={props.setPickedCard}
      />
    );
  };

  const orderCards = (cardArr, target, i, j) => {
    let check = false;
    cardArr?.forEach( card => {
      if(`${card.shelf}:${card.row}` === `${i}:${j}`) {
        check = true;
        target.push(createCard(card, i, j));
      }
    });
    if (!check) return target.push(createButton(i, j));
  }

  const renderCards = (cardArr) => {
    const renderedCards = [];
    for (let i = 0; i < user.shelves; i ++) {
      for (let j = 0; j < user.columns; j++) {
        orderCards(cardArr, renderedCards, i, j);
      }
    }
    return renderedCards;
  }

  const breakOutXY = string => {
    const arr = string.split(':');
    return arr;
  };

  const handleClick = e => {
    props.setShowAddModal({display: 'flex'});
    props.setPosition(breakOutXY(e.target.parentElement.id));
    props.setPickedCard({});
  };

  return (
    <div className='wineGrid'>
      {renderCards(cardArr)}
    </div>
  )
}

export default WineGrid;