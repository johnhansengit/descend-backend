'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stats extends Model {
    static associate(models) {
      Stats.belongsTo(models.User, { foreignKey: 'userId' });
      Stats.belongsTo(models.DiveType, { foreignKey: 'diveTypeId' });
    }
  };

  Stats.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    diveTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'DiveTypes',
        key: 'id'
      }
    },
    previousDives: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    loggedDives: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Stats',
    tableName: 'Stats',
    timestamps: true,
  });

  return Stats;
};