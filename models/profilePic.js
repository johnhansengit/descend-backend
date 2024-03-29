'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfilePic extends Model {
     /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProfilePic.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  ProfilePic.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    userId: DataTypes.UUID,
    profilePic: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ProfilePic',
  });

  return ProfilePic;
};
