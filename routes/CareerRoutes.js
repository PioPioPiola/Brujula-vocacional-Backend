const express = require('express');
const router = express.Router();

const { createCareer, getCareers, getCareerById } = require('../controllers/CareerController');

router.post('/', createCareer);
router.get('/', getCareers);
router.get('/:idCarrera', getCareerById);

module.exports = router;