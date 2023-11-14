import React from 'react';
import Card from '../Card/Card';

const Cards = ({ info }) => {
  
  // Verificar si info es un array
  if (!Array.isArray(info)) {
    info = []; // Convertir en un array vacío si no lo es
  }

  return (
    <div className='cards-container'> 
      <div className='compo-cards'>
      {info.map((D) => (
        <Card key={D.id} info={D} />
      ))}
    </div>
    </div>
    
  );
};

export default Cards;
