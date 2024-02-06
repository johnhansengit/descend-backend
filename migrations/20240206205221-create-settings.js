'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      theme: {
        type: Sequelize.STRING,
        defaultValue: 'Blue Hole',
      },
      measureTemp: {
        type: Sequelize.STRING,
        defaultValue: 'C',
      },      
      measureWeight: {
        type: Sequelize.STRING,
        defaultValue: 'kg',
      },
      measureDepth: {
        type: Sequelize.STRING,
        defaultValue: 'm',
      },
      measurePressure: {
        type: Sequelize.STRING,
        defaultValue: 'bar',
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Settings');
  }
};