'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        event_id: 1,
        user_id:3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        event_id: 2,
        user_id:3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        event_id: 3,
        user_id:3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
