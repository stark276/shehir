import React from 'react';
import './POPOSSpace.css'

function POPOSSpace(props) {
  const {name, image, address} = props;
  return (
    <div className="poposspace">
      <img src={`${process.env.PUBLIC_URL}images/${image}`}     
        width="300"
        height="300"
        alt="50 Califonia St."
      />
      <h1>{name}</h1>
      <div>{address}</div>
      
    </div>
  )
}

export default POPOSSpace
