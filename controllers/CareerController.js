const Career = require('../models/Career'); 

const createCareer = async (req, res) => {
  try {
    const careerData = req.body; 
    const newCareer = await Career.create(careerData);
    res.status(201).json(newCareer);
  } catch (error) {
    console.error('Error al crear la carrera:', error);
    res.status(500).json({ error: 'Error al crear la carrera', details: error.message });
  }
};

const getCareers = async (req, res) => {
  try {
    const filters = {
      universityId: req.query.universityId,
      professionCode: req.query.professionCode
    };
    console.log("Query params:", req.query);

    if (!filters.universityId) delete filters.universityId;
    if (!filters.professionCode) delete filters.professionCode;

    const careers = await Career.findAll({ where: filters });

    res.status(200).json(careers);
  } catch (error) {
    console.error('Error obteniendo las carreras:', error);
    res.status(500).json({ error: error.message });
  }
};

const getCareerById = async (req, res) => {
  try {
    const { idCarrera } = req.params;

    console.log("Recibido idCarrera:", idCarrera);

    const career = await Career.findByPk(Number(idCarrera)); 

    if (!career) {
      return res.status(404).json({ error: 'No se encontró la carrera con el id enviado.' });
    }

    res.json(career);
  } catch (error) {
    console.error("Error al buscar carrera:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCareer,
  getCareers,
  getCareerById
};