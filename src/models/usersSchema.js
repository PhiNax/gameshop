const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connectDB');

class User extends Model { }

User.init({
    // attributes for User Model
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: 'user'
    }
);