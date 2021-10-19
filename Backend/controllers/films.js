const Listing = require('../models/listing');

exports.getAllFilms = (req, res, next) => {
    Listing.find({}, (err, docs) => {
        if (!docs) {
            res.status(404).json({
                success: false,
                msg: "Uhoh! Looks like there was an error with getAllFilms"
            })
            return;
        }
        const films = docs.map((doc) => doc['film']);
        const uniqueFilms = Array.from(new Set(films.map(film => film.title)))
            .map(title => {
                return films.find(film => film.title === title);
            })
        res.status(200).json({
            success: true,
            msg: "Displaying all films",
            films: uniqueFilms
        });
    })
}

exports.getFilmListings = (req, res, next) => {
    Listing.find({ 'film.title': req.params.title }, (err, docs) => {
        if (!docs) {
            res.status(404).json({
                success: false,
                msg: "Uhoh! Looks like there was an error with getFilmListings"
            })
            return;
        }
        res.status(200).json({
            success: true,
            msg: `Displaying all listings for ${req.params.title}`,
            listings: docs
        })
    })
}