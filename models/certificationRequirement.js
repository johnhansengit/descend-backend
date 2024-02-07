'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CertificationRequirement extends Model {
     /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here if needed
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
    tableName: 'certificationRequirements',
    timestamps: true,
  });
  return Certification-requirement;
};
