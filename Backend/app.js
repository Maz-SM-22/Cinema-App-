const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const router = express.Router();
const morgan = require('morgan');
const session = require('express-session');
const cors = require('cors');
const MongoStore = require('connect-mongo');
const dbConnect = require('./config/dbConfig');
const app = express();

dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 1300;
const mongoStore = MongoStore.create({
    mongoUrl: process.env.LOCAL_MONGODB_URL,
    collection: 'sessions'
})

app.set('trust proxy', 1);
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: mongoStore,
    cookie: {
        httpOnly: true,
        maxAge: 86400000,
        sameSite: "none",
    }
}))

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

dbConnect();

app.use(express.json());

const routeCinemas = require('./routes/cinemas');
const routeFilms = require('./routes/films');
const routeNeighbourhoods = require('./routes/neighbourhoods');

app.use('/cinemas', routeCinemas);
app.use('/films', routeFilms);
app.use('/areas', routeNeighbourhoods);

app.use(() => {
    let error = new Error('Page not found');
    error.statusCode = 404;
})

app.listen(PORT, () => {
    console.log(`Server active at http://localhost:${PORT}`);
})