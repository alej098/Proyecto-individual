
const { Dog, Temperament } = require("../db");

const createDog = async (req, res) => {
  try {
    const { imagen, name, height, weight, años_de_vida, temperaments } = req.body;

    const newDog = await Dog.create({
      imagen,
      name,
      height,
      weight,
      años_de_vida,
      iscreated: true,
    });

    if (temperaments && temperaments.length > 0) {
      for (const tem of temperaments) {
        const temperamentsDB = await Temperament.findOne({
          where: {
            name: tem,
          },
        });
        if (temperamentsDB) {
        await newDog.setTemperaments(temperamentsDB);
      }
      }
      
    }

    res.status(201).json(newDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createDog,
};
