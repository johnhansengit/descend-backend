'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
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
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    firstName: DataTypes.STRING, 
    lastName: DataTypes.STRING, 
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },    
    heightUnit: DataTypes.STRING,
    heightCm: DataTypes.INTEGER,
    heightFt: DataTypes.INTEGER,
    heightIn: DataTypes.INTEGER,
    weightUnit: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    profilePic: {
      type: DataTypes.STRING,
      allowNull: true,
    },    
    agency: {
      type: DataTypes.STRING,
      defaultValue: 'PADI',
      validate: {
        isIn: [['PADI', 'other']],
      },
    },
    diverNo: DataTypes.STRING,
    insuranceProvider: DataTypes.STRING,
    diveInsuranceNo: DataTypes.STRING,
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
