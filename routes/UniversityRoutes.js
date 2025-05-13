const express = require('express');
const router = express.Router();
const { createUniversidad, getUniversidades, updateUniversidad } = require('../controllers/UniversityController');

router.get('/', getUniversidades);
router.post('/', createUniversidad);
router.put('/:code', updateUniversidad);

module.exports = router;