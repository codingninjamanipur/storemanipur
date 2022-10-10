import React from 'react';
import Rating from './Rating';

function MenuItem({image,name,price,rating,numReviews}) {
  return (
    <div className='menuItem'>
    <div style={{backgroundImage: `url(${image})`}}></div>
    <h>{name}</h>
    <p>${price}</p>
    <Rating rating={rating} numReviews={numReviews} />
    </div>
    
  );
}

export default MenuItem