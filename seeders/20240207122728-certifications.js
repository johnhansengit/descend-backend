'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Certification-requirement', [{
      agency: 'Emergency First Repsonse (EFR)',
      name: 'Primary Care (CPR)',
      reqDivesNo: 0,
      reqDivesType: null,
      minAge: 0,
      prereq: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'Emergency First Repsonse (EFR)',
      name: 'Secondary Care (First Aid)',
      reqDivesNo: 0,
      reqDivesType: null,
      minAge: 0,
      prereq: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'PADI Scuba Diver',
      reqDivesNo: 2,
      reqDivesType: 'Open Water',
      minAge: 15,
      prereq: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Open Water Diver',
      reqDivesNo: 4,
      reqDivesType: 'Open Water',
      minAge: 15,
      prereq: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Adventure Diver',
      reqDivesNo: 3,
      reqDivesType: 'Open Water',
      minAge: 15,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Advanced Open Water Diver',
      reqDivesNo: 5,
      reqDivesType: 'Open Water',
      minAge: 15,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Rescue Diver',
      reqDivesNo: 0,
      reqDivesType: null,
      minAge: 15,
      prereq: 'Advanced Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Junior Divemaster',
      reqDivesNo: 0,
      reqDivesType: null,
      minAge: 15,
      prereq: 'Rescue Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Adaptive Support Diver',
      reqDivesNo: 0,
      reqDivesType: null,
      minAge: 15,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Adaptive Techniques',
      reqDivesNo: 0,
      reqDivesType: null,
      minAge: 18,
      prereq: 'Divemaster',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Altitude Diver',
      reqDivesNo: 2,
      reqDivesType: 'Altitude',
      minAge: 10,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'AWARE - Dive Against Debris',
      reqDivesNo: 1,
      reqDivesType: 'Dive Against Debris',
      minAge: 10,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'AWARE - Shark Conservation Diver',
      reqDivesNo: 2,
      reqDivesType: 'Shark Conservation',
      minAge: 12,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Boat Diver',
      reqDivesNo: 2,
      reqDivesType: 'Boat',
      minAge: 10,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Cavern Diver',
      reqDivesNo: 4,
      reqDivesType: 'Cavern',
      minAge: 18,
      prereq: 'Advanced Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Deep Diver',
      reqDivesNo: 4,
      reqDivesType: 'Deep',
      minAge: 15,
      prereq: 'Adventure Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      agency: 'PADI',
      name: 'Delayed Surface Marker Buoy (DSMB) Diver',
      reqDivesNo: 2,
      reqDivesType: 'DSMB',
      minAge: 12,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Digital Underwater Photographer',
      reqDivesNo: 1,
      reqDivesType: 'Underwater Photography',
      minAge: 10,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Diver Propulsion Vehicle (DPV) Diver',
      reqDivesNo: 2,
      reqDivesType: 'DPV',
      minAge: 12,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Drift Diver',
      reqDivesNo: 2,
      reqDivesType: 'Drift',
      minAge: 12,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Dry Suit Diver',
      reqDivesNo: 2,
      reqDivesType: 'Dry Suit',
      minAge: 10,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Enriched Air Diver',
      reqDivesNo: 0,
      reqDivesType: null,
      minAge: 12,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Emergency Oxygen Provider',
      reqDivesNo: 0,
      reqDivesType: null,
      minAge: null,
      prereq: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Equipment Specialist',
      reqDivesNo: 0,
      reqDivesType: null,
      minAge: 10,
      prereq: 'PADI Scuba Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Fish Identification Diver',
      reqDivesNo: 2,
      reqDivesType: 'Fish ID',
      minAge: 10,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Full Face Mask Diver',
      reqDivesNo: 2,
      reqDivesType: 'Full Face Mask',
      minAge: 12,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Ice Diver',
      reqDivesNo: 3,
      reqDivesType: 'Ice',
      minAge: 18,
      prereq: 'Advanced Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Night Diver',
      reqDivesNo: 3,
      reqDivesType: 'Night',
      minAge: 12,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'PADI AWARE Specialist',
      reqDivesNo: 0,
      reqDivesType: null,
      minAge: 0,
      prereq: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Search & Recovery Diver',
      reqDivesNo: 4,
      reqDivesType: 'Open Water',
      minAge: 12,
      prereq: 'Advanced Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Self-Reliant Diver',
      reqDivesNo: 3,
      reqDivesType: 'Self-Reliant',
      minAge: 18,
      prereq: 'Advanced Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Semiclosed Rebreather Diver',
      reqDivesNo: 3,
      reqDivesType: 'Rebreather',
      minAge: 15,
      prereq: 'Advanced Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Sidemount Diver',
      reqDivesNo: 3,
      reqDivesType: 'Sidemount',
      minAge: 15,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Underwater Naturalist',
      reqDivesNo: 2,
      reqDivesType: 'Underwater Naturalist',
      minAge: 10,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Underwater Navigator',
      reqDivesNo: 3,
      reqDivesType: 'Underwater Navigation',
      minAge: 10,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Underwater Photographer',
      reqDivesNo: 2,
      reqDivesType: 'Underwater Photography',
      minAge: 10,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Underwater Videographer',
      reqDivesNo: 3,
      reqDivesType: 'Underwater Videography',
      minAge: 10,
      prereq: 'Open Water Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      agency: 'PADI',
      name: 'Wreck Diver',
      reqDivesNo: 4,
      reqDivesType: 'Wreck',
      minAge: 15,
      prereq: 'Adventure Diver',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Certification-requirement', null, {});
  }
};
