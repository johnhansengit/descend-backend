'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('CertificationRequirements', [{
      agency: 'Emergency First Repsonse (EFR)',
      name: 'EFR Instuctor',
      reqDivesNo: 0,
      reqDivesType: null,
      minAge: 0,
      prereq: 'Primary Care (CPR)',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Divemaster',
      reqDivesNo: 40,
      reqDivesType: 'Open Water',
      minAge: 18,
      prereq: 'Rescue Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Assistant Instructor',
      reqDivesNo: 60,
      reqDivesType: 'Open Water',
      minAge: 18,
      prereq: 'Divemaster',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Open Water Scuba Instructor (OWSI)',
      reqDivesNo: 100,
      reqDivesType: 'Open Water',
      minAge: 18,
      prereq: 'Divemaster',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('CertificationRequirements', null, {});
  }
};
