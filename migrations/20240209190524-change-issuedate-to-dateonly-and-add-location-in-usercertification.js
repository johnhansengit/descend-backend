'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('UserCertifications', 'issueDate', {
      type: Sequelize.DATEONLY,
      allowNull: true,
    });

    await queryInterface.addColumn('UserCertifications', 'location', {
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('UserCertifications', 'issueDate', {
      type: Sequelize.DATE,
      allowNull: false,
    });

    await queryInterface.removeColumn('UserCertifications', 'location');
  }
};