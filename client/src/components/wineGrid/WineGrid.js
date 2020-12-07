import React from 'react';
import Card from '../card/Card.js';

const WineGrid = props => {
  const createButton = (i, j) => {
    return (
      <div 
        className="showForm"
        key={`${i}:${j}`}
        id={`${i}:${j}`} >
        <p className='cardPosition'>{`${i + 1}:${j + 1}`}</p>
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
        title={card.title}
        country={card.country}
        year={card.year}
        x={card.shelf}
        y={card.row}
        updateOnPost={props.updateOnPost}
        setUpdateOnPost={props.setUpdateOnPost}
      />
    );
  };

  const orderCards = (cardArr, target, i, j) => {
    let check = false;
    cardArr?.map( card => {
      if(`${card.shelf}:${card.row}` === `${i}:${j}`) {
        check = true;
        return target.push(createCard(card, i, j));
      }
      return null;
    });
    if (!check) return target.push(createButton(i, j));
  }

  const renderCards = () => {
    const cardArr = props.cardArr;
    const renderedCards = [];
    for (let i = 0; i < 15; i ++) {
      for (let j = 0; j < 8; j++) {
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
    props.setShowModal({display: 'flex'});
    props.setPosition(breakOutXY(e.target.parentElement.id));
  };

  return (
    <div className='wineGrid'>
      {renderCards()}
    </div>
  )
}

export default WineGrid;