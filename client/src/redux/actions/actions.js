//import actions-types
import axios from 'axios'
 import {GET_DOGS, DETAIL, GET_TEMPERAMENTS,SEARCH,PAGINATE, ORDEN, FILTER, FILTERER} from './actions-types'

//actions creater



 export function postDog(state){
    return async function(dispatch){
       try {
        await axios.post("http://localhost:3001/dogs", state)
        alert('se creo el perro exitosamente');
       } catch (error) {
        alert(error)
       }

    }

}
export function getAllDogs() {
  return async function(dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/dogs");
      if (response.status === 200) {
        dispatch({
          type: GET_DOGS,
          payload: response.data // Pasar los datos recibidos a action.payload
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };
}
export function getAllTemperaments() {
  return async function(dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/temperaments");
      if (response.status === 200) {
        dispatch({
          type:  GET_TEMPERAMENTS,
          payload: response.data // Pasar los datos recibidos a action.payload
        });
      
      }
    } catch (error) {
      alert(error.message);
    }
  };
}
export function getDogsByid(id) {
  return async function (dispatch){
      try {
          const response= await axios.get(`http://localhost:3001/dogs/${id}`)
          dispatch({
              type: DETAIL,
              payload: response.data
          
      })
      } catch (error) {
          alert(error.response.data.error)
      }
  }
}
export function getSearch(name) {
  return async function (dispatch){
      try {
          const response= await axios.get(`http://localhost:3001/dogs/name?nombre=${name}`)
      
          dispatch({
              type: SEARCH,
              payload: response.data
          
      })
    
      } catch (error) {
          alert(error.response.data.error)
      }
  }
}
export function page(order) {
  return function (dispatch){
      dispatch({
          type:PAGINATE,
          payload: order
      })
  }

}
export function ordenDogs(order) {
  return function (dispatch){
      dispatch({
          type:ORDEN,
          payload: order
      })
  }

}
export function filterDogs(temperament) {
  return function (dispatch) {
    dispatch({
      type: FILTER,
      payload: temperament
    });
  };
}
export function filtererDogs(order) {
  return function (dispatch) {
    dispatch({
      type: FILTERER,
      payload: order
    });
  };
}
