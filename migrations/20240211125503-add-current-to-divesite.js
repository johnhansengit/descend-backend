'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('DiveSites', 'current', {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        isIn: [['none', 'mild', 'moderate', 'strong']],
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('DiveSites', 'current');
  }
};