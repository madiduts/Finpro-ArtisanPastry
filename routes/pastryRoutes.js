// routes/pastryRoutes.js
const express = require('express');
const router = express.Router();
const pastryController = require('../controllers/pastryController');

// Memetakan endpoint ke fungsi controller masing-masing
router.get('/', pastryController.getAllPastries);
router.post('/', pastryController.createPastry);
router.put('/:id', pastryController.updatePastry);
router.delete('/:id', pastryController.deletePastry);
router.patch('/:id/sell', pastryController.sellPastry);

module.exports = router;