'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Profiles', 'profilePic');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('Profiles', 'profilePic', {
      type: Sequelize.STRING,
    });
  }
};
