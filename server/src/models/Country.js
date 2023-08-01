const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define("Country", {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    flagImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.FLOAT
    },
  }, {timestamps: false});
};