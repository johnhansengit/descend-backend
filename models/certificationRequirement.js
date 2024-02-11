'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CertificationRequirement extends Model {

    static associate(models) {
      CertificationRequirement.hasMany(models.UserCertification, { foreignKey: 'certificationRequirementId' });
    }
  };
  CertificationRequirement.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    agency: DataTypes.STRING,
    name: DataTypes.STRING,
    reqDivesNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    reqDivesType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    minAge: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    prereq: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'CertificationRequirement',
    tableName: 'CertificationRequirements',
    timestamps: true,
  });
  return CertificationRequirement;
};
