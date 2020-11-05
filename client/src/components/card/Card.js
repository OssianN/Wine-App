import React from 'react';

const Card = props => {
  const classListNames = `card x${props.x} y${props.y}`;

  return (
    <div className={classListNames}>
      <h1>{props.title}</h1>
      <h4>{props.desc}</h4>
      <p>{props.country}</p>
    </div>
  )
}

export default Card;