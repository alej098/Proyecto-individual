import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDogsByid } from '../../redux/actions/actions';

const Detail = () => {
  

  const dispatch = useDispatch();
  const params = useParams();
 

  const DogsDetail = useSelector(state => state.DogsDetail);
  console.log(params);

  useEffect(() => {
    dispatch(getDogsByid(params.id));
  }, [dispatch, params.id]);


  return (
    <div className='detail-container'>
      <h1>Detalles del perro</h1>
      <div className='cont-img-detail'>
        <div className='dog-container'>
        <img
          src={DogsDetail?.image?.url || DogsDetail?.imagen || 'https://www.dogalize.com/wp-content/uploads/2017/06/La-sverminazione-e-la-pulizia-del-cucciolo-del-cane-2-800x400-800x400-200x200.jpg'}
          alt='dog'
           className='dog-image'
            />

          <div className='dog-info'>
            <p>ID: {DogsDetail?.id}</p>
            <p>Nombre: {DogsDetail?.name}</p>
            <p>altura: {DogsDetail?.height?.imperial} </p>
            <p>peso: {DogsDetail?.weight?.imperial} </p>
            <p>años de vida: {DogsDetail?.life_span} </p>
            <p>temperamentos: {DogsDetail?.temperament} </p>
          </div>
        </div>
      </div>
    </div>
  );
  
  
};

export default Detail;
