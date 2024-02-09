'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add userName column
    await queryInterface.addColumn('Users', 'userName', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });

    // Remove email column
    await queryInterface.removeColumn('Users', 'email');
  },

  down: async (queryInterface, Sequelize) => {
    // Add email column
    await queryInterface.addColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });

    // Remove userName column
    await queryInterface.removeColumn('Users', 'userName');
  }
};