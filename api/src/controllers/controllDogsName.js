const { Dog, Temperament } = require('../db');
const axios = require('axios');
const { Op } = require('sequelize');
const API_KEY = process.env.API_KEY;

const getDogsByNombre = async (name) => {
 
  const Nombre = name.toLowerCase();

  
  const dogsFromDB = await Dog.findAll({
    where: {
      name: {
        [Op.iLike]: `%${Nombre}%`, 
      },
    },
    include: Temperament,
  });

 
  const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${Nombre}&api_key=${API_KEY}`);
  const dogsFromAPI = response.data;

 
  const allDogs = [...dogsFromDB, ...dogsFromAPI];


  if (allDogs.length === 0) {
    throw new Error('No se encontraron razas de perros con ese nombre.');
  }

  return allDogs;
};

module.exports = { getDogsByNombre };
