const { User, Game, GameCategory, GamePlatform, GameScreenshot } = require('../database/connectDB');

const controller = {

    // Show all games
    users: async (req, res) => {
        try {
            const dataUser = await User.findAll({ attributes: { exclude: ['password', 'avatar', 'access', 'createdAt', 'updatedAt'] } });

            const count = { count: dataUser.length };

            /*          for (let i = 0; i <= count.count - 1; i++) {
                            dataUser.push({ detail: 'http://localhost:3000/api/users/' + dataUser[i].id });
                        }
            */
            const data = [count, dataUser,];

            res.send(data);
        }
        catch (err) {
            throw new Error('API: List users: failed => ' + err);
        }
    },
    userId: async (req, res) => {
        const id = req.params.id;
        try {
            const dataUser = await User.findOne({ where: { id: id }, attributes: { exclude: ['password', 'access', 'createdAt', 'updatedAt'] } });

            const url = { avatar: 'localhost:3000/img/avatars/' + dataUser.avatar };

            const data = [dataUser, url];

            res.send(data);
        }
        catch (err) {
            throw new Error('API: List user by ID: failed => ' + err);
        }
    },
    products: async (req, res) => {
        try {
            const products = await Game.findAll({
                include: [GameCategory, GamePlatform, GameScreenshot]
            });

            const count = { count: products.length };

            const countByCategory = products.gamecategory

            res.send(products);
        }
        catch (err) {
            throw new Error('API: List products: failed => ' + err);
        }
    },
    productId: async (req, res) => {
        const id = req.params.id;
        try {
            const product = await Game.findOne({
                include: [GameCategory, GamePlatform, GameScreenshot],
                where: { id: id }
            });
            res.send(product)
        }
        catch (err) {
            throw new Error('API: List product by Id: failed => ' + err);
        }
    }
}

module.exports = controller;