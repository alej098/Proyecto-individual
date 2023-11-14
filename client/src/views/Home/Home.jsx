// Home.jsx
import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterDogs, getAllDogs, ordenDogs, page, getAllTemperaments, filtererDogs } from '../../redux/actions/actions';
import Cards from '../../componentes/Cards/Cards';
import SearchBar from '../../componentes/SearchBar/SearchBar';

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.AllDogs);
  const alltemperaments= useSelector((state) => state.Alltemperaments)



  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getAllTemperaments())
  }, [dispatch]);

  const pagination = (event) => {
    dispatch(page(event.target.name));
  };

  const ordenar = (order) => {
    dispatch(ordenDogs(order));
  };

  const filters = (order) => {
      dispatch(filterDogs(order.target.value));
    
  };
  const filterOrigen = (origen) => {
    dispatch(filtererDogs(origen));  
  };
  

  return (
    <div className='page-container'> 
    <div className='home-compo'>
      <div className='botons-ordenar'>
        <div className='botons-filtros'>
        <button name= "DB" onClick={() =>filterOrigen("DB")}>data_base</button>
        <button name="API" onClick={() =>filterOrigen("API")}>API</button>
          <select name='temperaments' onChange={filters}>{alltemperaments.map((temp)=> <option value={temp.name} key={temp.id}>{temp.name} </option>)}</select>
        </div>
        <label>ordenamiento</label>
        <button name='AZ' onClick={() => ordenar("A-Z")}>A-Z</button>
        <button name='ZA' onClick={() => ordenar("Z-A")}>Z-A</button>
        <button name="PESO_ASC" onClick={() => ordenar("PESO_ASC")}>L-P</button>
        <button name="PESO_DESC" onClick={() => ordenar("PESO_DESC")}>P-L</button>
      </div>

      <Cards info={allDogs} imagen={allDogs.imagen} />

      <div className='pagination-container'>
        <button name='prev' onClick={pagination}>Prev</button>
        <button name='next' onClick={pagination}>Next</button>
      </div>

      <div className='cont-searchBar'>
        <SearchBar />
      </div>
    </div>

    </div>
   
  );
};

export default Home;
