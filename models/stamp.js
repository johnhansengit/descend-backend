'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Stamp extends Model {
        static associate(models) {
            Stamp.belongsTo(models.User, { foreignKey: 'userId' });
            Stamp.hasMany(models.DiveLog, { foreignKey: 'stampId' });
        }
    };

    Stamp.init({}, {
        sequelize,
        modelName: 'Stamp',
    });

    return Stamp;
};