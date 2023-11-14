const { getDogsID } = require('../controllers/controllerDogsID');

const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

const getDogsIDhandler = async (req, res) => {
  try {
    const { id } = req.params;

    if (uuidRegex.test(id)) {
      // El id es un UUID, buscar en la base de datos
      const response = await getDogsID(id);
      res.status(200).json(response);
    } else if (!isNaN(id)) {
      // El id es un número, buscar en la API
      const response = await getDogsID(parseInt(id));
      res.status(200).json(response);
    } else {
      // El id no es válido
      res.status(400).json({ error: 'ID inválido' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getDogsIDhandler };
