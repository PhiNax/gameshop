const gameSchema = require('../models/gameSchema');

const controller = {


    // Index Dashboard
    dashboard: (req, res) => {
        const allgames = gameSchema.find({ id: 3328 })
        console.log(allgames.id);

        res.render('admin/dashboard');
    }
};

module.exports = controller;