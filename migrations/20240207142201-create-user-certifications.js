'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('UserCertifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.UUID,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE'
      },
      certificationRequirementId: {
        type: Sequelize.INTEGER,
        references: { model: 'CertificationRequirements', key: 'id' },
        onDelete: 'SET NULL'
      },
      issueDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      diveShop: {
        type: Sequelize.STRING,
        allowNull: true
      },
      instructor: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('UserCertifications');
  }
};
