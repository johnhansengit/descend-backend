'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('DiveSites', 'userId', {
      type: Sequelize.UUID,
      references: {
        model: 'Users', 
        key: 'id', 
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('DiveSites', 'userId');
    }
  }
};