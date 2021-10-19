const express = require('express');
const filmController = require('../controllers/films');
const router = express.Router();

router.get('/', filmController.getAllFilms);
router.get('/:title', filmController.getFilmListings);

module.exports = router;