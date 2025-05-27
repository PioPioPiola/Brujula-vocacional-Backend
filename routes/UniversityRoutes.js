const express = require('express');
const router = express.Router();
const { createUniversidad, getUniversidades, updateUniversidad, getUniversidadById } = require('../controllers/UniversityController');

router.get('/', getUniversidades);
router.post('/', createUniversidad);
router.put('/:code', updateUniversidad);
router.get('/:id', getUniversidadById);

module.exports = router;