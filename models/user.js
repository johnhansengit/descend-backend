'use strict';
const { Model, UUIDV4 } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Profile, {
        foreignKey: 'userId',
        as: 'profile',
        onDelete: 'CASCADE',
      });
      User.hasOne(models.Settings, {
        foreignKey: 'userId',
        as: 'settings',
        onDelete: 'CASCADE',
      });    
      User.hasMany(models.UserCertification, {
        foreignKey: 'userId',
        as: 'userCertification',
        onDelete: 'CASCADE',
      });    
    }    
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
