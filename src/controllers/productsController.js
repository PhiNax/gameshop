const { Op } = require('sequelize');
const { Game, GameCategory, GamePlatform, GameScreenshot } = require('../database/connectDB');

const controller = {

    // Detail - Detail from one product
    detail: async (req, res) => {
        const gameId = req.params.id

        try {
            const game = await Game.findOne({
                include: [GameCategory, GamePlatform, GameScreenshot],
                where: {
                    id: gameId
                }
            });
            res.render('products/productsDetails', { game, user: req.session.userLogged });
        }
        catch (err) {
            throw new Error('List detail game: failed => ' + err);
        }
    },
    platform: async (req, res) => {
        try {
            const game = await Game.findAll({
                include: [GameCategory, GamePlatform,
                    {
                        model: GamePlatform,
                        where: {
                            name: req.params.name
                        }
                    }],
            });
            res.render('products/productsList', { game, user: req.session.userLogged });
        }
        catch (err) {
            throw new Error('List games by platform: failed => ' + err);
        }
    },
    // Search Games
    search: async (req, res) => {
        const searchInput = req.body.search;
        try {
            const game = await Game.findAll({
                include: [GameCategory, GamePlatform],
                where: {
                    name: {
                        [Op.like]: `%${searchInput}%`
                    }
                }
            })
            res.render('products/productsList', { game, user: req.session.userLogged });
        }
        catch (err) {
            throw new Error('Search games: failed => ' + err);
        }
    },
};

module.exports = controller;