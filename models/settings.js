'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Settings extends Model {
    static associate(models) {
      Settings.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
    }
  }
  Settings.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    theme: {
      type: DataTypes.STRING,
      defaultValue: 'Blue Hole',
      validate: {
        isIn: [['Night Dive', 'Blue Hole', 'Reef Crest', 'Kelp Forest']],
      },
    },
    measureTemp: {
      type: DataTypes.STRING,
      defaultValue: 'C',
      validate: {
        isIn: [['C', 'F']],
      },
    },
    measureWeight: {
      type: DataTypes.STRING,
      defaultValue: 'kg',
      validate: {
        isIn: [['kg', 'lbs']],
      },
    },
    measureDepth: {
      type: DataTypes.STRING,
      defaultValue: 'm',
      validate: {
        isIn: [['m', 'ft']],
      },
    },
    measurePressure: {
      type: DataTypes.STRING,
      defaultValue: 'bar',
      validate: {
        isIn: [['bar', 'psi']],
      },
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'User',
        key: 'id',
      },
    },    
  }, {
    sequelize,
    modelName: 'Settings',
  });
  return Settings;
};
