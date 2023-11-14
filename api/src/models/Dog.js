const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
       defaultValue:"https://media.tenor.com/JCPqvEiHbHkAAAAM/perros-graciosos.gif",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    años_de_vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    iscreated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};

