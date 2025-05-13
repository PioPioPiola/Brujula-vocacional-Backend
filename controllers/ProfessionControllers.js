const Profession = require('../models/Profession');

const createProfession = async (req, res) => {
  try {
    const newProfession = await Profession.create({
      code: req.body.code, // 
      name: req.body.name,
      definition: req.body.definition,
      gen: req.body.gen,
      urlImage: req.body.urlImage,
      interests: req.body.interests,
      habilities: req.body.habilities
    });
    res.status(201).json(newProfession);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProfessions = async (req, res) => {
  try {
    const { gen, habilities, interests } = req.query;

    if (gen && gen !== "M" && gen !== "F") {
      return res.status(400).json({
        error: 'El parámetro "gen" debe ser "M" o "F".'
      });
    }

    const whereClause = {};

    if (gen) {
      whereClause.gen = gen;
    }

    if (habilities) {
      const habilityTerms = habilities.split(',').map(term => term.trim());

      whereClause.habilities = {
        [Op.or]: habilityTerms.map(term => ({
          [Op.like]: `%${term}%`
        }))
      };
    }

    if (interests) {
      const interestTerms = interests.split(',').map(term => term.trim());

      whereClause.interests = {
        [Op.or]: interestTerms.map(term => ({
          [Op.like]: `%${term}%`
        }))
      };
    }

    const professions = await Profession.findAll({ where: whereClause });
    res.json(professions);

  } catch (error) {
    console.error("Error al obtener profesiones:", error);
    res.status(500).json({ error: error.message });
  }
};

const updateProfession = async (req, res) => {
  try {
    const { code } = req.params;
    const {
      name,
      definition,
      gen,
      urlImage,
      interests,
      habilities
    } = req.body;

    const profession = await Profession.findOne({ where: { code } });

    if (!profession) {
      return res.status(404).json({ error: `No se encontró la profesión conel código"${code}".` });
    }

    await profession.update({
      name,
      definition,
      gen,
      urlImage,
      interests,
      habilities
    });

    res.json({ message: "e modificó correctamente la profesión.", profession });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  createProfession,
  getProfessions,
  updateProfession
};