'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class DiveLog extends Model {

        static associate(models) {
            DiveLog.belongsTo(models.User, { foreignKey: 'userId' });
            DiveLog.belongsTo(models.DiveSite, { foreignKey: 'diveSiteId' });
            DiveLog.belongsToMany(models.DiveType, { through: 'DiveLogDiveType' });
            DiveLog.belongsTo(models.Stamp, { foreignKey: 'stampId' });
            DiveLog.hasMany(models.Buddy);
            DiveLog.hasMany(models.DivePic);
        }
    };

    DiveLog.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        date: DataTypes.DATEONLY,
        timeIn: DataTypes.TIME,
        timeOut: DataTypes.TIME,
        maxDepth: DataTypes.INTEGER,
        maxDepthUnit: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['m', 'ft']],
            },
        },
        temp: DataTypes.INTEGER,
        tempUnit: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['C', 'F']],
            },
        },
        airStart: DataTypes.INTEGER,
        airEnd: DataTypes.INTEGER,
        airUnit: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['bar', 'psi']],
            },
        },
        diveWeight: DataTypes.INTEGER,
        diveWeightUnit: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['kg', 'lbs']],
            },
        },
        gas: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['air', 'Nitrox']],
            },
        },
        tank: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['Steel 15.0L/125 cu.ft.', 'Steel 12.2L/100 cu.ft.', 'Aluminum 11.1L/80 cu.ft.', 'Steel 10.5L/85 cu.ft.', 'Aluminum 5.7L/40 cu.ft.', 'Steel 3L/25 cu.ft.', 'Aluminum 2.7L/19 cu.ft.']],
            },
        },
        backPlate: DataTypes.BOOLEAN,
        suitType: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['none', 'rashguard', 'wetsuit', 'drysuit']],
            },
        },
        wetsuitThickness: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['2mm', '3mm', '4mm', '5mm', '6mm', '7mm', '8mm', '9mm']],
            },
        },
        description: DataTypes.TEXT,
        visibility: DataTypes.INTEGER,
        visibilityUnit: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['m', 'ft']],
            },
        },
        safetyStop: DataTypes.BOOLEAN,
        deco: DataTypes.BOOLEAN,
        salinity: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['salt', 'fresh', 'brackish']],
            },
        },
    }, {
        sequelize,
        modelName: 'DiveLog',
    });

    return DiveLog;
};