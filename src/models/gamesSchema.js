module.exports = (sequelize, Sequelize, DataTypes) => {
    return sequelize.define('game', {
        id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
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
        platform: {
            type: DataTypes.STRING,
            allowNull: false
        },
        released: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        coverImage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        metacritic: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        esrbRating: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        platform_slug: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}
