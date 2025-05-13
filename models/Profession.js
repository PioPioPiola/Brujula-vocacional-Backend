// models/Profession.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Profession = sequelize.define('Profession', {
  code: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    allowNull: false 
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  definition: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  gen: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  urlImage: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  interests: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  habilities: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});


module.exports = Profession;