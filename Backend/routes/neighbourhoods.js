const express = require('express');
const neighbourhoodController = require('../controllers/neighbourhoods');
const router = express.Router();

router.get('/', neighbourhoodController.getAllNeighbourhoods);
router.get('/:area', neighbourhoodController.getCinemasByNeighbourhood);

module.exports = router;