'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class WishList extends Model {
        static associate(models) {
            WishList.belongsTo(models.User, { foreignKey: 'userId' });
            WishList.belongsToMany(models.DiveSite, { through: 'WishListDiveSite' });
        }
    };

    WishList.init({}, {
        sequelize,
        modelName: 'WishList',
    });

    return WishList;
};