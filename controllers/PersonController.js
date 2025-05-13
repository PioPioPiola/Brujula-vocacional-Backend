const Person = require('../models/Person');

const updateInsertPerson = async (req, res) => {
  try {
    const { id, name, location, gen, interests, habilities } = req.body;

    if (!name || !location) {
    return res.status(400).json({ error: 'Los campos name y location son obligatorios' });
    }

    const [person, created] = await Person.upsert({
      id,
      name,
      location,
      gen,
      interests,
      habilities
    });

    res.status(created ? 201 : 200).json({
      message: created ? 'Persona creada exitosamente' : 'Persona actualizada exitosamente',
      data: person
    });
  } catch (error) {
    console.error("Error al ingresar o actualizar persona:", error.message);
    res.status(500).json({ error: error.message });
  }
};

const getPersonById = async (req, res) => {
  try {
    const { id } = req.params;

    const person = await Person.findByPk(id);

    if (!person) {
      return res.status(404).json({ error: 'No se encontró la persona con el id enviado.' });
    }

    res.json(person);
  } catch (error) {
    console.error("Error al buscar persona:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  updateInsertPerson,
  getPersonById
};