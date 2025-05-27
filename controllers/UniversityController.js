const Universidad = require('../models/University');

const createUniversidad = async (req, res) => {
  try {
    const { code_ciudad, name, city, adress, tel, logoUrl } = req.body;

    const nuevaUniversidad = await Universidad.create({
      code_ciudad,
      name,
      city,
      adress,
      tel,
      logoUrl
    });

    res.status(201).json(nuevaUniversidad);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUniversidades = async (req, res) => {
  try {
    const code_ciudad = parseInt(req.query.code_ciudad, 10);

    const where = {};

    if (!isNaN(code_ciudad)) {
      where.code_ciudad = code_ciudad;
    }

    const universidades = await Universidad.findAll({ where });

    res.status(200).json(universidades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUniversidadById = async (req, res) => {
  try {
    const { id } = req.params;
    const universidad = await Universidad.findByPk(id);

    if (!universidad) {
      return res.status(404).json({ error: "Universidad no encontrada" });
    }

    res.status(200).json(universidad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUniversidad = async (req, res) => {
  try {
    const { code } = req.params;
    const { code_ciudad, name, city, adress, tel, logoUrl } = req.body;

    const universidad = await Universidad.findOne({ where: { code_ciudad: code } });

    if (!universidad) {
      return res.status(404).json({ message: 'Universidad no encontrada con ese código' });
    }

    await universidad.update({
      code_ciudad,
      name,
      city,
      adress,
      tel,
      logoUrl
    });

    res.status(200).json(universidad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUniversidad,
  getUniversidades,
  updateUniversidad,
  getUniversidadById
};