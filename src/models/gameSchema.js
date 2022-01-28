module.exports = (sequelize, DataTypes) => {
    return sequelize.define('game', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        coverImage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        gamecategoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'gamecategories',
                key: 'id'
            }
        },
        gameplatformId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'gameplatforms',
                key: 'id'
            }
        }
    })
}