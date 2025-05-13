const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Person = sequelize.define('Person', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,     
    primaryKey: true,        
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  location: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  gen: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  interests: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  habilities: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'Persons',     
  timestamps: false         
});

module.exports = Person;