const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Universidad = sequelize.define('Universidad', {
  code_ciudad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  adress: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  tel: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  logoUrl: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
}, {
  tableName: 'Universidades',
  timestamps: false
});

module.exports = Universidad;
