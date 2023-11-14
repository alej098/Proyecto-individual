const { getDogsByNombre } = require('../controllers/controllDogsName');

const getDogsByNombreHandler = async (req, res) => {
  try {
    const { nombre } = req.query;
    const response = await getDogsByNombre(nombre);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getDogsByNombreHandler };
