import React, { useEffect } from 'react'
import { useState,  } from 'react'
import { postDog } from '../../redux/actions/actions'
import {useDispatch, useSelector} from 'react-redux'
import { getAllTemperaments } from '../../redux/actions/actions'
const Create = () => {
  const dispatch = useDispatch();


  const allTemperaments= useSelector(state => state.Alltemperaments)
  useEffect(()=>{
   dispatch(getAllTemperaments())
  },[dispatch])
  



  const [state, setState] = useState({
    imagen:"",
    name:"",
    height:0,
    weight:0,
    años_de_vida:0,
    temperaments: [],
  })

  const [errors, setErrors] = useState({
    imagen:"",
    name:"",
    height:"",
    weight:"",
    años_de_vida:"",
    temperaments:"",
  })

  const validate = (state, name) => {
    if (name === "imagen") {
      if (state.imagen === "") {
        setErrors({ ...errors, imagen: "URL de imagen requerida" });
      } else {
        setErrors({ ...errors, imagen: "" });
      }
    }

    if (name === "name") {
      if (state.name === "") {
        setErrors({ ...errors, name: "El nombre es requerido" });
      } else {
        setErrors({ ...errors, name: "" });
      }
    }

    if (name === "height") {
      if (isNaN(parseInt(state.height))) {
        setErrors({ ...errors, height: "el dato debe ser un numero" });
      } else {
        setErrors({ ...errors, height: "" });
      }
    }

    if (name === "weight") {
      if (isNaN(parseInt(state.weight))){
        setErrors({ ...errors, weight: "el dato debe ser un numero" });
      } else {
        setErrors({ ...errors, weight: "" });
      }
    }

    if (name === "años_de_vida") {
      if (isNaN(parseInt(state.años_de_vida))) {
        setErrors({ ...errors, años_de_vida: "el dato debe ser un numero" });
      } else {
        setErrors({ ...errors, años_de_vida: "" });
      }
    }

    if (name === "temperaments") {
      if (state.temperaments.length === 0) {
        setErrors({ ...errors, temperaments: "Al menos un temperamento es requerido" });
      } else {
        setErrors({ ...errors, temperaments: "" });
      }
    }
  }

  const handleChange = (event) => {
    event.preventDefault()

    if (event.target.name === "temperaments") {
      if (state.temperaments.includes(event.target.value)) return

      setState({
        ...state,
        [event.target.name]: [...state[event.target.name], event.target.value]
      })
      return
    }

    setState({
      ...state,
      [event.target.name]: event.target.value
    })

    validate({
      ...state,
      [event.target.name]: event.target.value
    }, event.target.name)
  }

  const remove = (event) => {
    setState({
      ...state,
      [event.target.name]: [...state[event.target.name].filter(x => x !== event.target.id)]
    })
  }
 
  const handlerSubtmit=(event)=>{
    event.preventDefault();
    dispatch(postDog({
      imagen: state.imagen,  
      name: state.name,
      height: state.height,
      weight: state.weight,   
      años_de_vida: state.años_de_vida,
      temperaments: state.temperaments 
    }))
  }

  return (
    <div className='create-container'>
     
      <form onSubmit={ handlerSubtmit}>
      <input onChange={handleChange} type="text" name='imagen' placeholder='imagen' value={state.imagen} />
{errors.imagen && <p>{errors.imagen}</p>}


        <input onBlur={handleChange} type="text" name='name' placeholder='nombre' />
        {errors.name && <p>{errors.name}</p>}

        <input onBlur={handleChange} type="text" name='height' placeholder='altura' />
        {errors.height && <p>{errors.height}</p>}

        <input onBlur={handleChange} type="text" name='weight' placeholder='peso' />
        {errors.weight && <p>{errors.weight}</p>}

        <input onBlur={handleChange} type="text" name='años_de_vida' placeholder='años_de_vida' />
        {errors.años_de_vida && <p>{errors.años_de_vida}</p>}

        <div>
        {allTemperaments && (
  <select  onChange={handleChange} name="temperaments" id="temperaments" placeholder='temperamentos'>
    {allTemperaments.map(temperament => (
      <option key={temperament.id} value={temperament.id}>
        {temperament.name}
      </option>
    ))}
  </select>
)}

          {errors.temperaments && <p>{errors.temperaments}</p>}
          {
            state.temperaments.map(D => (
              <div key={D}>
                <span id={D}>{D}</span>
                <button type='button' id={D} name="temperaments" onClick={remove}>X</button>
              </div>
            ))
          }
        </div>
        <input disabled={errors.imagen || errors.name || errors.height || errors.weight || errors.años_de_vida ? true : false} type="submit" />
      </form>
    </div>
  )
}


export default Create
