const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'gameshop',
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
