const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    link: {
        type: String,
        required: [true]
    },
    time: {
        type: String,
        required: [true]
    },
    date: {
        type: String,
        required: [true]
    },
    film: {
        title: {
            type: String,
            required: [true]
        },
        poster: {
            type: String
        },
        year: {
            type: Number
        },
        genre: {
            type: String
        },
        duration: {
            type: String
        },
        director: {
            type: String
        },
        cast: {
            type: String
        },
        original_language: {
            type: String
        },
        language: {
            type: String
        }
    },
    cinema: {
        name: {
            type: String,
            required: [true]
        },
        barri: {
            type: String,
            required: [true]
        },
        address: {
            type: String
        }
    }
}, { collection: 'screenings' });

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;