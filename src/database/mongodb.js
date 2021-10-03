// Call mongoose module
const mongoose = require('mongoose');
const Game = require('../models/gameSchema');

// Database Conection
mongoose.connect('mongodb://localhost/gameshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB Connected!")
    console.log("--------------------")
    console.log()
    console.log("--------------------")


}).catch(err => {
    console.log(Error, err.message);
});

const nuevo = new Game({
    slug: 'nuevo',
    name: 'nuevo',
    platforms: [{ 0: 'PC' }],
    stores: null,
    released: '15-25-2020',
    background_image: 'none',
    rating: 4.3,
    rating_top: 5,
    metacritic: 93,
    clip: 'none',
    tags: null,
    esrb_rating: null,
    short_screenshots: null,
    genres: [{ 0: 'accion' }]
});



const quotes = Game.find();
console.log(quotes);