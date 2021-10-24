// Calle GameSchema form MySQL DataBase
const { Game } = require('../database/connectDB');

const controller = {
    // Dashboard: List All Games
    dashboard: async (req, res) => {
        try {
            const games = await Game.findAll();

            res.render('admin/dashboard', { games });
        }
        catch (err) {
            throw 'Dashboard: FindAll Games Error => ' + err;
        }
    },
    // Dashboard: List Games by platform
    platform: async (req, res) => {
        try {
            const platformName = req.params.id

            const games = await Game.findAll({
                where: {
                    platform_slug: platformName
                }
            });

            res.render('admin/dashboardByPlatform', { games });
        }
        catch (err) {
            throw 'Dashboard: Find Games By Platform Error => ' + err;
        }
    },
    // Dashboard: Form to create a new game
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
        try {
            await Game.create(newGame)
            // Render created Product by ID
            res.redirect('admin/dashboard');
        }
        catch (err) {
            throw 'Dashboard: Create New Game Failed => ' + err;
        }
    },
    // Get Form to edit by ID
    edit: async (req, res) => {
        try {
            const id = req.params.id;

            const games = await Game.findAll({
                where: {
                    id: id
                }
            });

            res.render('admin/dashboardEdit', { games });
        }
        catch (err) {
            throw 'Dashboard: Find Game By Id Error => ' + err;
        }
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