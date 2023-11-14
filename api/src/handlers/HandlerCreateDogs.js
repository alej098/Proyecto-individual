const { createDog } = require('../controllers/controllCreateDogs');

const getCreateDogshandler = async (req, res) => {
  try {
    await createDog(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {getCreateDogshandler};
