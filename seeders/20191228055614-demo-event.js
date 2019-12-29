'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('events', [
      {
        image : 'https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20191202125057.JPG',
        title : 'Raisa Concert',
        category_id: 3,
        user_id:1,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCMMyDCiDk19Yhkq4rwI_C4l8qHh4279i1BawO_7d82ty-hNNk',
        title : 'Java Jazz Concert',
        category_id: 3,
        user_id:2,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLAh102kPFVk9yDrJLaGAyQZeN6UmpNFZKQVy98X5LXduIq0OE',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        title : 'Rock Festival',
        category_id: 3,
        user_id:1,
      },
      //programing
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSa73VG8_1wSYZYVctzHt4gBRys10x_RFy6hM6cJ8xsEPU1BB2',
        title : 'Dumbwyas Bootcam',
        category_id: 1,
        user_id:1,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        image : 'https://androbuntu.com/wp-content/uploads/2019/09/Pengalaman-Kursus-Online-di-Udemy-by-Androbuntu.com_-696x392.jpg',
        title : 'Udemy Bootcamp',
        category_id: 1,
        user_id:3,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
     
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('events', null, {});
  }
};
