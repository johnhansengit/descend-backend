'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DivePics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      filePath: {
        type: Sequelize.STRING
      },
      diveLogId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'DiveLogs',
          key: 'id',
        },
        allowNull: true
      },
      diveSiteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'DiveSites',
          key: 'id',
        },
        allowNull: true
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
    await queryInterface.dropTable('DivePics');
  }
};