import React from 'react'
import { Link } from 'react-router-dom';


const Card = ({ info }) => {
 
  return (
    <div className='compo-card'>
      <div>
      <img src={info.image?.url || info.imagen} alt={'dog'} />

      </div>
      <div className='compo-card-info'>
        <Link to={`/detail/${info.id}`}>
          <label>Nombre : </label>
          <span>{info?.name}</span>
        </Link>
        <label>Temperamento : </label>
        <span>{info?.temperament}</span>
        <label>Peso : </label>
        <span>{info?.weight?.imperial}</span>
      </div>
    </div>
  );
};

export default Card