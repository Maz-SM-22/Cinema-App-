const express = require('express');
const cinemaController = require('../controllers/cinemas');
const router = express.Router();

router.get('/', cinemaController.getAllCinemas);
router.get('/:cinema', cinemaController.getCinemaListings);

module.exports = router;