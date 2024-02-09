'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCertification extends Model {
     /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserCertification.belongsTo(models.User, { foreignKey: 'userId' });
      UserCertification.belongsTo(models.CertificationRequirement, { foreignKey: 'certificationRequirementId' });
    }
  }

  UserCertification.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    userId: DataTypes.UUID,
    certificationRequirementId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    issueDate: DataTypes.DATE,
    diveShop: DataTypes.STRING,
    instructor: DataTypes.STRING,
    instructorNo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserCertification',
  });

  return UserCertification;
};
