'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class DiveSite extends Model {
        static associate(models) {
            DiveSite.hasMany(models.DiveLog);
            DiveSite.hasMany(models.CommentRating);
            DiveSite.hasMany(models.DivePic);
            DiveSite.belongsToMany(models.WishList, { through: 'WishListDiveSite' });
            DiveSite.belongsTo(models.User, { foreignKey: 'userId' });
        }
    };

    DiveSite.init({
        name: DataTypes.STRING,
        country: DataTypes.STRING,
        coordLat: DataTypes.STRING,
        coordLong: DataTypes.STRING,
        minDepth: DataTypes.INTEGER,
        maxDepth: DataTypes.INTEGER,
        avgTemp: DataTypes.INTEGER,
        avgVis: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        salinity: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['salt', 'fresh', 'brackish']],
            },
        },
        userId: {
            type: DataTypes.UUID,
            references: {
                model: 'User',
                key: 'id', 
            },
        },
    }, {
        sequelize,
        modelName: 'DiveSite',
    });

    return DiveSite;
};