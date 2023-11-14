const { Temperament } = require("../db");
const axios = require("axios");
// const { v4: uuidv4 } = require('uuid');
const API_KEY = process.env.API_KEY;

const getAllTemperaments = async () => {
  let data = await Temperament.findAll();

  if (!data || data.length === 0) {
    const temperaments = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    const temperamentAPI = temperaments.data;
    const infoApi = temperamentAPI.reduce((temperaments, dogs) => {
      if (dogs.temperament) {
        const temperamentsDogs = dogs.temperament.split(", ");
       temperamentsDogs.forEach((temperament)=> {
        if(!temperaments.includes(temperament)){
          temperaments.push(temperament)
        }

       })

      }
      
      return temperaments

    },[]);

    const temperamentsDB = await Temperament.bulkCreate(
      infoApi.map((temperament)=> ({name:temperament}))
    );
    return [...temperamentsDB];
  } else {
    return data;
  }
};

module.exports = { getAllTemperaments };
