'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Stamp extends Model {
        static associate(models) {
            Stamp.belongsTo(models.User);
            Stamp.hasMany(models.DiveLog);
        }
    };

    Stamp.init({}, {
        sequelize,
        modelName: 'Stamp',
    });

    return Stamp;
};