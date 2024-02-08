'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Profiles', 'userName', {
      type: Sequelize.STRING,
      allowNull: true, 
    });
    await queryInterface.addColumn('Profiles', 'firstName', {
      type: Sequelize.STRING,
      allowNull: true, 
    });
    await queryInterface.addColumn('Profiles', 'lastName', {
      type: Sequelize.STRING,
      allowNull: true, 
    });
    await queryInterface.addColumn('Profiles', 'profilePic', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Profiles', 'userName');
    await queryInterface.removeColumn('Profiles', 'firstName');
    await queryInterface.removeColumn('Profiles', 'lastName');
    await queryInterface.removeColumn('Profiles', 'profilePic');
  }
};
