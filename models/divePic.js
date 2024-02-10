'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class DivePic extends Model {
        static associate(models) {
            DivePic.belongsTo(models.DiveLog);
            DivePic.belongsTo(models.DiveSite);
        }
    };

    DivePic.init({
        filePath: DataTypes.STRING,
        sharePermission: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'DivePic',
    });

    return DivePic;
};