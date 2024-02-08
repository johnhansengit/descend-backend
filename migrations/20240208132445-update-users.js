'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Redefine the 'Users' table
    await queryInterface.removeConstraint('Profiles', 'Profiles_userId_fkey');
    await queryInterface.removeConstraint('Settings', 'Settings_userId_fkey');
    await queryInterface.removeConstraint('UserCertifications', 'UserCertifications_userId_fkey');

    await queryInterface.dropTable('Users');
  
    await queryInterface.createTable('Users', { // Create a new table
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      passwordDigest: {
        type: Sequelize.STRING,
        allowNull: false
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

    // Recreate foreign key constraints
    await queryInterface.addConstraint('Profiles', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'Profiles_userId_fkey', // Choose an appropriate name for the constraint
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'CASCADE',
    });
    await queryInterface.addConstraint('Settings', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'Settings_userId_fkey', // Choose an appropriate name for the constraint
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'CASCADE',
    });
    await queryInterface.addConstraint('UserCertifications', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'UserCertifications_userId_fkey', // Choose an appropriate name for the constraint
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    // Logic to revert the changes made in the up method
    await queryInterface.dropTable('Users');
  }
};
