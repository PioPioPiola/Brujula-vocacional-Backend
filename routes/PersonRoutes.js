const express = require('express');
const router = express.Router();
const { updateInsertPerson, getPersonById } = require('../controllers/PersonController');

router.get('/:id', getPersonById);
router.post('/', updateInsertPerson);

module.exports = router;