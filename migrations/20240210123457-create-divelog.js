'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DiveLogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false
      },
      diveSiteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'DiveSites',
          key: 'id',
        },
        allowNull: true
      },
      stampId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Stamps',
          key: 'id',
        },
        allowNull: true
      },
      date: {
        type: Sequelize.DATEONLY
      },
      timeIn: {
        type: Sequelize.TIME
      },
      timeOut: {
        type: Sequelize.TIME
      },
      maxDepth: {
        type: Sequelize.INTEGER
      },
      maxDepthUnit: {
        type: Sequelize.STRING
      },
      temp: {
        type: Sequelize.INTEGER
      },
      tempUnit: {
        type: Sequelize.STRING
      },
      airStart: {
        type: Sequelize.INTEGER
      },
      airEnd: {
        type: Sequelize.INTEGER
      },
      airUnit: {
        type: Sequelize.STRING
      },
      diveWeight: {
        type: Sequelize.INTEGER
      },
      diveWeightUnit: {
        type: Sequelize.STRING
      },
      gas: {
        type: Sequelize.STRING
      },
      tank: {
        type: Sequelize.STRING
      },
      backPlate: {
        type: Sequelize.BOOLEAN
      },
      suitType: {
        type: Sequelize.STRING
      },
      wetsuitThickness: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      visibility: {
        type: Sequelize.INTEGER
      },
      visibilityUnit: {
        type: Sequelize.STRING
      },
      safetyStop: {
        type: Sequelize.BOOLEAN
      },
      deco: {
        type: Sequelize.BOOLEAN
      },
      salinity: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DiveLogs');
  }
};