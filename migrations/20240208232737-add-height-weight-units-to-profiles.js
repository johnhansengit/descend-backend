'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Profiles', 'heightUnit', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('Profiles', 'weightUnit', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.changeColumn('Profiles', 'weight', {
      type: Sequelize.INTEGER,
      allowNull: true 
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Profiles', 'heightUnit');
    await queryInterface.removeColumn('Profiles', 'weightUnit');
    // Optionally, revert the weight column change if necessary
    await queryInterface.changeColumn('Profiles', 'weight', {
      type: Sequelize.FLOAT, 
      allowNull: true 
    });
  }
};
