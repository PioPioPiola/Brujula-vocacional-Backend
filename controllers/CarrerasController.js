const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Carrera = sequelize.define('Carrera', {
  idCarrera: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  codigo_profesion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  codigo_universidad: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Carreras',
  timestamps: false
});

module.exports = Carrera;

const Carrera = require('../models/carreras');

const updateInsertCarrera = async (req, res) => {
  try {
    const { idCarrera, nombre, descripcion, codigo_profesion, codigo_universidad } = req.body;

    if (!nombre || !codigo_profesion || !codigo_universidad) {
      return res.status(400).json({ error: 'Los campos nombre, codigo_profesion y codigo_universidad son obligatorios' });
    }

    const [carrera, created] = await Carrera.upsert({
      idCarrera,
      nombre,
      descripcion,
      codigo_profesion,
      codigo_universidad
    });

    res.status(created ? 201 : 200).json({
      message: created ? 'Carrera creada exitosamente' : 'Carrera actualizada exitosamente',
      data: carrera
    });
  } catch (error) {
    console.error("Error al ingresar o actualizar carrera:", error.message);
    res.status(500).json({ error: error.message });
  }
};

const getCarreraById = async (req, res) => {
  try {
    const { idCarrera } = req.params;

    const carrera = await Carrera.findByPk(idCarrera);

    if (!carrera) {
      return res.status(404).json({ error: 'No se encontró la carrera con el id enviado.' });
    }

    res.json(carrera);
  } catch (error) {
    console.error("Error al buscar carrera:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  updateInsertCarrera,
  getCarreraById
};