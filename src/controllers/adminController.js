const { Op } = require('sequelize');
const { Game, GameCategory, GamePlatform, User } = require('../database/connectDB');

// Call Bcrypt for encrypt passwords
const bcrypt = require('bcryptjs');

const controller = {

    // Show all games
    list: async (req, res) => {
        try {
            const game = await Game.findAll({ include: [GameCategory, GamePlatform] });
            res.render('admin/gamesList', { game, user: req.session.userLogged });
        }
        catch (err) {
            throw new Error('Admin: List all games: failed => ' + err);
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
            res.render('admin/gamesList', { game, user: req.session.userLogged });
        }
        catch (err) {
            throw new Error('Admin: Search games: failed => ' + err);
        }
    },
    // Create - Form to create view
    create: (req, res) => {
        res.render('admin/gameCreate', { user: req.session.userLogged });
    },
    // Create Method to store in DataBase
    store: async (req, res) => {

        // newGame catch data from request form to store in DataBase
        const newGame = {
            name: req.body.name,
            description: req.body.description,
            coverImage: req.file.filename,
            rating: req.body.rating,
            price: req.body.price,
            gamecategoryId: req.body.category,
            gameplatformId: req.body.platform
        };
        try {
            await Game.create(newGame);
            const createdGame = await Game.findOne({ include: [GameCategory, GamePlatform], where: { name: newGame.name } })

            // Render to the new game created page by ID
            res.render('products/productsDetail', { game: createdGame, user: req.session.userLogged });
        }
        catch (err) {
            throw new Error('Admin: Create New Game Failed => ' + err);
        }
    },
    // Edit view - Form to edit game
    getEdit: async (req, res) => {
        const id = req.params.id;
        try {
            const game = await Game.findOne({
                include: [GameCategory, GamePlatform],
                where: {
                    id: id
                }
            });

            res.render('admin/gameEdit', { game, user: req.session.userLogged });
        }
        catch (err) {
            throw new Error('Admin: Find Game By Id Error => ' + err);
        }
    },
    // Update - Form to edit
    edit: async (req, res) => {
        const id = req.params.id;

        // updateGame catch data from game edit form
        const updateGame = {
            name: req.body.name,
            description: req.body.description,
            //coverImage: req.file.filename,
            rating: req.body.rating,
            price: req.body.price,
            category: req.body.category,
            platform: req.body.platform
        };
        try {
            await Game.update({
                name: updateGame.name,
                description: updateGame.description,
                //coverImage: updateGame.coverImage,
                rating: updateGame.rating,
                price: updateGame.price,
                gamecategoryId: updateGame.category,
                gameplatformId: updateGame.platform
            }, {
                where: {
                    id: id
                }
            });
            // TODO: Render created Product by ID
            res.redirect('/admin', { user: req.session.userLogged });
        }
        catch (err) {
            throw new Error('Admin: Update Game on DB Error => ' + err);
        }
    },
    // Delete - Delete one product from DB
    delete: async (req, res) => {
        const id = req.params.id;

        try {
            await Game.destroy({
                where: {
                    id: id
                }
            })

            res.redirect('/admin', { user: req.session.userLogged });
        }
        catch (err) {
            throw new Error('Admin: Delete Game on DB Error => ' + err);
        }
    },


    /* USERS CONTROLLER */
    userList: async (req, res) => {
        try {
            const user = await User.findAll({});
            res.render('admin/userList', { user });
        }
        catch (err) {
            throw new Error('Admin: List Users on DB Error => ' + err);
        }
    },
    userCreate: (req, res) => {
        res.render('admin/userCreate');
    },
    userStore: async (req, res) => {
        console.log(req.body)
        let passCrypt = await bcrypt.hash(req.body.password, 10);

        const newUser = {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email,
            password: passCrypt,

        };
        try {
            await User.create(newUser);
            /*const createdUser = await User.findOne({ where: { email: newUser.email } })*/

            // Render to the new game created page by ID
            res.render('admin/user');
        }
        catch (err) {
            throw new Error('Admin: Create Users on DB Error => ' + err);
        }
    },
    userGetEdit: async (req, res) => {
        const id = req.params.id;

        try {
            const user = await User.findOne({
                where: {
                    id: id
                }
            });
            res.render('admin/userEdit', { user });

        }
        catch (err) {
            throw new Error('Admin: GetEdit Users on DB Error => ' + err);
        }
    },
    userUpdate: async (req, res) => {
        const id = req.params.id;

        // updateGame catch data from game edit form
        const updateUser = {
            name: req.body.name,
            nickname: req.body.nickname,

            access: req.body.access
        };
        try {
            await User.update({
                name: updateUser.name,
                nickname: updateUser.nickname,
                email: updateUser.email,

                access: updateUser.access
            }, {
                where: {
                    id: id
                }
            });
            const user = await User.findAll({})
            // TODO: Render created Product by ID
            res.render('admin/userList', { user });
        }
        catch (err) {
            throw new Error('Admin: Update User on DB Error => ' + err);
        }
    }
}

module.exports = controller;