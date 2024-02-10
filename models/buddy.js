'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Buddy extends Model {
        static associate(models) {
            Buddy.belongsTo(models.User, { as: 'user' });
            Buddy.belongsTo(models.User, { as: 'buddy' });
            Buddy.belongsTo(models.DiveLog);
        }
    };

    Buddy.init({
        userId: DataTypes.UUID,
        buddyId: DataTypes.UUID,
        diveLogId: DataTypes.INTEGER,
        buddyName: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Buddy',
    });

    return Buddy;
};