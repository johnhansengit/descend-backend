'use strict';
const { Model, UUIDV4 } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
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
      User.hasOne(models.ProfilePic, {
        foreignKey: 'userId',
        as: 'profilePic',
        onDelete: 'CASCADE',
      });
      User.hasOne(models.Stamp, {
        foreignKey: 'userId',
        as: 'stamp',
        onDelete: 'SET NULL',
      });
      User.hasMany(models.UserCertification, {
        foreignKey: 'userId',
        as: 'userCertification',
        onDelete: 'CASCADE',
      });
      User.hasMany(models.Stats, {
        foreignKey: 'userId',
        as: 'stats',
        onDelete: 'CASCADE'
      });
      User.hasMany(models.DiveLog, {
        foreignKey: 'userId',
        as: 'diveLogs',
        onDelete: 'CASCADE',
      });
      User.hasOne(models.WishList, {
        foreignKey: 'userId',
        as: 'wishList',
        onDelete: 'CASCADE',
      });
      User.hasMany(models.CommentRating, {
        foreignKey: 'userId',
        as: 'commentRatings',
        onDelete: 'CASCADE',
      });
      User.hasMany(models.Buddy, { foreignKey: 'userId', as: 'buddies' });
      User.hasMany(models.Buddy, { foreignKey: 'buddyId', as: 'buddiedBy' });
      User.addHook('afterCreate', async (user, options) => {
        const settings = {
          userId: user.id,
        };
        await models.Settings.create(settings);
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
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
