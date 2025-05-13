const express = require('express');
const router = express.Router();

const { updateInsertPerson, getPersonById } = require('../controllers/PersonController');
const { updateInsertCarrera, getCarreraById } = require('../controllers/CarrerasController');

// Person routes
router.post('/person', updateInsertPerson);
router.get('/person/:id', getPersonById);

// Carrera routes
router.post('/carrera', updateInsertCarrera);
router.get('/carrera/:idCarrera', getCarreraById);

module.exports = router;
