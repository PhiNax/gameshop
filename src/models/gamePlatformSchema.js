module.exports = (sequelize, DataTypes) => {
    return sequelize.define('gameplatform', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        { timestamps: false }
    )
}