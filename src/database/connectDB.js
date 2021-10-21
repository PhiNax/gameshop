const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    DB_NAME = heroku_682e2d214f754e2,
    DB_USER = b173f9d71e85c6,
    DB_PASS = a9dc9374,
    {
        host: us - cdbr - east - 04.cleardb.com,
        dialect: 'mysql'
    })

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    });

// User Schema    
const UserSchema = require('../models/usersSchema');
const User = UserSchema(sequelize, Sequelize, Sequelize);

// Game Schema 
const GameSchema = require('../models/gamesSchema');
const Game = GameSchema(sequelize, Sequelize, Sequelize);

// Synchornize only for create new tables

sequelize.sync({ force: false })
    .then(() => { console.log('Tables Users and Games synchronized to dababase'); })
    .catch(error => { conso.log(error); });

module.exports = { User, Game }