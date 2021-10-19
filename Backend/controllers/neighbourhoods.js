const Listing = require('../models/listing');

exports.getAllNeighbourhoods = (req, res, next) => {
    Listing.find({}, (err, docs) => {
        if (!docs) {
            res.status(404).json({
                success: false,
                msg: "Uhoh! Looks like there was an error with getAllNeighbourhoods"
            })
            return;
        }
        const neighbourhoods = docs.map((doc) => doc['cinema']['barri']);
        const uniqueNeighbourhoods = Array.from(new Set(neighbourhoods));
        res.status(200).json({
            success: true,
            msg: "Displaying all neighbourhoods",
            neighbourhoods: uniqueNeighbourhoods
        })
    })
}

exports.getCinemasByNeighbourhood = (req, res, next) => {
    Listing.find({ 'cinema.barri': req.params.area }, (err, docs) => {
        if (!docs) {
            res.status(404).json({
                success: false,
                msg: "Uhoh! Looks like there was an error with getCinemasByNeighbourhood"
            })
            return;
        }
        res.status(200).json({
            success: true,
            msg: `Displaying all listings in ${req.params.area}`,
            listings: docs
        })
    })
}