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
    detail: (req, res) => {
        const detailProductById = products.find(element => element.id === req.params.id);
        res.render('games/productsDetail', { games: detailProductById });
    }
};


module.exports = controller;