'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
      });
    }    
  }
  Profile.init({
    agency: {
      type: DataTypes.STRING,
      defaultValue: 'PADI',
      validate: {
        isIn: [['PADI', 'other']],
      },
    },    
    diverNo: DataTypes.STRING,
    diveInsuranceNo: DataTypes.STRING,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    dob: DataTypes.DATE,
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'User',
        key: 'id',
      },
    },    
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};