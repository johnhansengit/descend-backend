module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DiveLogDiveType', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      DiveLogId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'DiveLogs',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      DiveTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'DiveTypes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DiveLogDiveType');
  }
};