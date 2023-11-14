import React, {useState } from 'react'
import { getSearch } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const dispatch= useDispatch();



  const [dog, setDOg] = useState("");


  const handlerChange= (event)=>{
    setDOg(event.target.value)

  }

  const handlerSubmit=(event)=>{
    event.preventDefault();
    dispatch(getSearch(dog))
    document.getElementById("search").value=""

  }




  return (
    <form onSubmit={handlerSubmit}> 
      <input id='search' onChange={handlerChange} type="text" /> <input type="submit" />
    </form>
  )
}

export default SearchBar