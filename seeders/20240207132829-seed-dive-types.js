'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('DiveTypes', [
      { diveType: 'Open Water', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Altitude', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Dive Against Debris', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Shark Conservation', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Boat', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Cavern', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Deep', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'DSMB', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Underwater Photography', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'DPV', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Drift', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Dry Suit', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Fish ID', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Full Face Mask', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Ice', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Night', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Self-Reliant', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Rebreather', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Sidemount', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Underwater Naturalist', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Underwater Navigation', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Underwater Videography', createdAt: new Date(), updatedAt: new Date() },
      { diveType: 'Wreck', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('DiveTypes', null, {});
  }
};
