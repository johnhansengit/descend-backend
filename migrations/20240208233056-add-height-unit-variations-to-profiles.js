'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Profiles', 'heightCm', {
      type: Sequelize.INTEGER,
      allowNull: true, // Adjust based on your requirements
    });
    await queryInterface.addColumn('Profiles', 'heightFt', {
      type: Sequelize.INTEGER,
      allowNull: true, // Adjust based on your requirements
    });
    await queryInterface.addColumn('Profiles', 'heightIn', {
      type: Sequelize.INTEGER,
      allowNull: true, // Adjust based on your requirements
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Profiles', 'heightCm');
    await queryInterface.removeColumn('Profiles', 'heightFt');
    await queryInterface.removeColumn('Profiles', 'heightIn');
  }
};
