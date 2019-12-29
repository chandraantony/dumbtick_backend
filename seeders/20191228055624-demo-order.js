'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        event_id: 1,
        user_id:3,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        event_id: 2,
        user_id:3,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        event_id: 3,
        user_id:3,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
     
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
