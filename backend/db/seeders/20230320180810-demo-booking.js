'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 1,
        startDate: '2023-03-01',
        endDate: '2023-03-02'
      },
      {
        spotId: 2,
        userId: 2,
        startDate: '2022-03-01',
        endDate: '2022-03-02'
      },
      {
        spotId: 1,
        userId: 2,
        startDate: '2021-03-01',
        endDate: '2021-03-02'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      startDate: { [Op.in]: ['2023-03-01', '2022-03-01', '2021-03-01'] }
    }, {});
  }
};
