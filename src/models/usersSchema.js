const { Sequelize } = require("sequelize/types");
const connection = require('../database/connectDB');

const Model = Sequelize.Model;
class User extends Model { }
User.init({
    // attributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.PASSWORD,
        allowNull: false
    }
}, {
    connection,
    modelName: 'user'
    // options
});