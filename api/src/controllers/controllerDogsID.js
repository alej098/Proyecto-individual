const { Dog,Temperaments } = require('../db');
const axios = require('axios');
const API_KEY = process.env.API_KEY;

const getDogsID = async (id) => {
  let DogsDB;
  if (isNaN(id)) {
    DogsDB = await Dog.findOne({ where: { id }, include: Temperaments });
  }
  const peticion = (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}/?${API_KEY}`)).data;
  let AllDogs;
  if (DogsDB) {
    AllDogs = { ...DogsDB.toJSON(), ...peticion };
  } else {
    AllDogs = peticion;
  }

  // Construyendo la img con su idimg
  if (AllDogs.reference_image_id) {
    AllDogs.image = {
      id: AllDogs.reference_image_id,
      url: `https://cdn2.thedogapi.com/images/${AllDogs.reference_image_id}.jpg`
    };
  }

  return AllDogs;
};

module.exports = { getDogsID };

