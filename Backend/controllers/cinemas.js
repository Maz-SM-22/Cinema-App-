const Listing = require('../models/listing');

exports.getAllCinemas = (req, res, next) => {
    Listing.find({}, (err, docs) => {
        if (!docs) {
            res.status(404).json({
                success: false,
                msg: "Uhoh! Looks like there's an error with getAllCinemas"
            })
            return;
        }
        const cinemas = docs.map((doc) => doc['cinema']);
        const uniqueCinemas = Array.from(new Set(cinemas.map(cinema => cinema.name)))
            .map(name => {
                return cinemas.find(cinema => cinema.name === name);
            })
        res.status(200).json({
            success: true,
            msg: "Displaying all cinemas",
            cinemas: uniqueCinemas
        })
    });
}

exports.getCinemaListings = (req, res, next) => {
    Listing.find({ 'cinema.name': req.params.cinema }, (err, docs) => {
        if (!docs) {
            res.status(404).json({
                success: false,
                msg: "Uhoh! Looks like there's an error with getCinemaListings"
            })
            return;
        }
        res.status(200).json({
            success: true,
            msg: `Displaying all listings for ${req.params.cinema}`,
            listings: docs
        })
    })
}