const { Game } = require('../database/connectDB');

// Create Main Controller
const controller = {
    // Index
    index: async (req, res) => {

        const gamesPc = await Game.findAll({
            where: {
                platform_slug: 'pc',
            }
        });
        const gamesPs4 = await Game.findAll({
            where: {
                platform_slug: 'ps4',
            }
        });
        const gamesPs5 = await Game.findAll({
            where: {
                platform_slug: 'ps5',
            }
        });
        const gamesXbox = await Game.findAll({
            where: {
                platform_slug: 'xbox',
            }
        });
        const gamesWiiu = await Game.findAll({
            where: {
                platform_slug: 'wiiu',
            }
        });
        const gamesSwitch = await Game.findAll({
            where: {
                platform_slug: 'switch',
            }
        });

        res.render('index', { gamesPc, gamesPs4, gamesPs5, gamesXbox, gamesWiiu, gamesSwitch });
    },

    // Detail from one product
    detail: (req, res) => {
        res.render('productdetails');
    }
};

module.exports = controller;