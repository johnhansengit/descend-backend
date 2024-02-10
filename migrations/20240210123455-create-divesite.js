'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DiveSites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      coordLat: {
        type: Sequelize.STRING
      },
      coordLong: {
        type: Sequelize.STRING
      },
      minDepth: {
        type: Sequelize.INTEGER
      },
      maxDepth: {
        type: Sequelize.INTEGER
      },
      avgTemp: {
        type: Sequelize.INTEGER
      },
      avgVis: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('DiveSites');
  }
};