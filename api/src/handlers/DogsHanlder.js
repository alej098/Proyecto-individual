const {getDogs}= require('../controllers/controllAllDogs')

const getDogsHandler = async (req, res) => {
    try {
      const response = await getDogs();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = { getDogsHandler };