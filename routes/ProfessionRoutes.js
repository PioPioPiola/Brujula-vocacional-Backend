const express = require('express');
const router = express.Router();
const professionController = require('../controllers/professionController');

router.get('/', professionController.getProfessions);
router.post('/', professionController.createProfession);
router.put('/:code', professionController.updateProfession);

module.exports = router;