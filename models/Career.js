const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Career = sequelize.define('Career', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  universityId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  professionCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  pensumLink: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'Careers',
  timestamps: false
});

module.exports = Career;