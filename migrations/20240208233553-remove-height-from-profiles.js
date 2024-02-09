'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Profiles', 'height');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Profiles', 'height', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  }
};
