const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define("Activity", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER
        }
    }, {timestamps: false})
}