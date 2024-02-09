'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Profiles', 'dob', {
      type: Sequelize.DATE,
      allowNull: true
    });
    await queryInterface.changeColumn('Profiles', 'profilePic', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Profiles', 'dob', {
      type: Sequelize.DATE,
      allowNull: false
    });
    await queryInterface.changeColumn('Profiles', 'profilePic', {
      type: Sequelize.STRING,
      allowNull: false
    });
  }
};
