'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Profiles', 'dob', {
      type: Sequelize.DATEONLY,
      allowNull: true,
    });

    await queryInterface.removeColumn('Profiles', 'userName');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Profiles', 'dob', {
      type: Sequelize.DATE,
      allowNull: true,
    });

    await queryInterface.addColumn('Profiles', 'userName', {
      type: Sequelize.STRING,
    });
  }
};
