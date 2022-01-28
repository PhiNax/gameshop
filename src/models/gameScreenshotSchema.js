module.exports = (sequelize, DataTypes) => {
    return sequelize.define('gamescreenshot', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gameId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'game',
                key: 'id'
            }
        }
    },
        { timestamps: false }
    )
}