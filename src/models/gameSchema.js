const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const gameSchema = new Schema({
    slug: String,
    name: String,
    platforms: Array,
    stores: Array,
    released: String,
    background_image: String,
    rating: Number,
    rating_top: Number,
    metacritic: Number,
    clip: String,
    tags: Array,
    esrb_rating: Object,
    short_screenshots: Array,
    genres: Array
});

const Game = model('game', gameSchema);

module.exports = Game;