const { Model } = require('sequelize');
const { Op } = require('sequelize');

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
        current: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['none', 'mild', 'moderate', 'strong']],
            },
        },
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
        hooks: {
            afterFind: async (diveSites, options) => {
                if (!Array.isArray(diveSites)) {
                    diveSites = [diveSites];
                }

                for (const diveSite of diveSites) {
                    const diveLogs = await diveSite.getDiveLogs();
                    if (diveLogs.length > 0) {
                        const avgTemp = diveLogs.reduce((sum, log) => sum + log.temp, 0) / diveLogs.length;
                        const avgVis = diveLogs.reduce((sum, log) => sum + log.visibility, 0) / diveLogs.length;
                        diveSite.setDataValue('avgTemp', avgTemp);
                        diveSite.setDataValue('avgVis', avgVis);
                    }
                }
            },
        },
    });

    return DiveSite;
};