import React from 'react';
import Card from '../card/Card.js';

const WineGrid = props => {
  const cardArr = props.searchValue ? props.searchArr : props.cardArr;

  const createButton = (i, j) => {
    return (
      <div 
        className="add-wine__div"
        key={`${i}:${j}`}
        id={`${i}:${j}`} >
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