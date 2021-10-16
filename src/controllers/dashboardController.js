// Calle GameSchema form MySQL DataBase
const { Game } = require('../database/connectDB');

const controller = {
    // Index Dashboard or List Games
    dashboard: async (req, res) => {
        const games = await Game.findAll();
        res.render('admin/dashboard', { games });
    },
    // List Games for platform
    platform: async (req, res) => {
        const platformName = req.params.id

        const games = await Game.findAll({
            where: {
                platform_slug: platformName,
            }
        });
        res.render('admin/dashboardByPlatform', { games });
    },
    // Create - Form to create
    create: (req, res) => {
        res.render('admin/dashboardCreate');
    },
    // Create Method to store in DataBase
    store: async (req, res) => {
        // newGame catch data from game create form
        const newGame = {
            name: req.body.name,
            description: req.body.description,
            platform: req.body.platform,
            platform_slug: req.body.platform_slug,
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
    // Get Form to edit by ID
    edit: async (req, res) => {
        const id = req.params.id;

        const games = await Game.findAll({
            where: {
                id: id,
            }
        });
        res.render('admin/dashboardEdit', { games });
    },
    // Update - Method to update
    update: async (req, res) => {

        await Game.save()
            .then(() => {
                // TODO: Render created Product by ID
                res.redirect('admin/dashboard');
            })
            .catch((error) => { console.log(error) })
    },
    // Delete - Delete one product from DB
    destroy: async (req, res) => {
        await Game.destroy({
            where: { id: id }
        })
            .then(() => {
                // Render created Product by ID
                res.redirect('admin/dashboard');
            })
            .catch((error) => { console.log(error) })
    }
};

module.exports = controller;