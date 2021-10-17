// Call Games DataBase Table (MySQL)
const { Game } = require('../database/connectDB');

const controller = {
    // Root - Show all products
    platform: async (req, res) => {
        const platformName = req.params.id

        const games = await Game.findAll({
            where: {
                platform_slug: platformName,
            }
        });
        res.render('games/gamesList', { games });
    },
    // Detail - Detail from one product
    detail: async (req, res) => {
        const gameId = req.params.id

        const games = await Game.findAll({
            where: {
                id: gameId,
            }
        });
        res.render('games/gameDetails', { games });
    }
};


module.exports = controller;