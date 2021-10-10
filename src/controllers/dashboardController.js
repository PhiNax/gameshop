// Calle GameSchema form MySQL DataBase
const { Game } = require('../database/connectDB');

const controller = {
    // Index Dashboard or List Games
    dashboard: async (req, res) => {
        const games = await Game.findAll();
        res.render('admin/dashboard', { games });
    },
    // Create - Form to create
    create: (req, res) => {
        res.render('admin/gamesCreate');
    },
    // Create Method to store in DataBase
    store: async (req, res) => {
        // newGame catch data from game create form
        const newGame = {
            name: req.body.name,
            description: req.body.description,
            platform: req.body.platform,
            released: req.body.released,
            coverImage: req.body.coverImage,
            rating: req.body.rating,
            metacritic: req.body.metacritic,
            esrbRating: req.body.esrbRating,
            price: req.body.price
        };
        await Game.create(newGame)
            .then(() => {
                // Render created Product by ID
                res.redirect('admin/dashboard');
            })
            .catch((error) => { console.log(error) })
    },
    // Update - Form to edit
    edit: (req, res) => {
        // Do the magic
    },
    // Update - Method to update
    update: (req, res) => {
        // Do the magic
    },
    // Delete - Delete one product from DB
    destroy: (req, res) => {
        // Do the magic
    }
};

module.exports = controller;