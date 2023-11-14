const { Dog } = require('../db');
const axios = require('axios');
const API_KEY = process.env.API_KEY;

const getDogsDB = async () => {
  const DogsDB = await Dog.findAll();
  return DogsDB;
};

const getDogsApi = async () => {
  const peticion = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
  const DogsApi = peticion.data;
  return DogsApi;
};

const getDogs = async () => {
  const DogsDB = await getDogsDB();
  const DogsAPI = await getDogsApi();
  const AllDogs = [...DogsDB, ...DogsAPI];
  return AllDogs;
};

module.exports = { getDogs };