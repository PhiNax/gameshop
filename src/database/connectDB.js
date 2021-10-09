const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    })

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    });

const UserSchema = require('../models/usersSchema');
const User = UserSchema(sequelize, Sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => { console.log('Tables syncroned to dababase'); })
    .catch(error => { conso.log(error); });


module.exports = { User }