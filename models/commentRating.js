'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class CommentRating extends Model {
        static associate(models) {
            CommentRating.belongsTo(models.User);
            CommentRating.belongsTo(models.DiveSite);
        }
    };

    CommentRating.init({
        date: DataTypes.DATE,
        comment: DataTypes.TEXT,
        rating: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5
            },
        },
    }, {
        sequelize,
        modelName: 'CommentRating',
    });

    return CommentRating;
};