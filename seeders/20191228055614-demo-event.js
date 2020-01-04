'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('events', [
      {
        image : 'https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20191202125057.JPG',
        title : 'Raisa Concert',
        category_id: 3,
        user_id:1,
        description :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price : 300000,
        address : 'Kec. Ciputat, Kota Tangerang Selatan, Banten 15413',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQanE61U8i8zMUMQSzu6cURDy2aFcb6T48TfrMNKh-ANm57hQ3n',
        title : 'Isyana Concert',
        category_id: 3,
        description :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        user_id:1,
        price : 300000,
        address : 'Kec. Ciputat, Kota Tangerang Selatan, Banten 15413',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCMMyDCiDk19Yhkq4rwI_C4l8qHh4279i1BawO_7d82ty-hNNk',
        title : 'Java Jazz Concert',
        category_id: 3,
        description :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        user_id:2,
        price : 300000,
        address : 'Kec. Ciputat, Kota Tangerang Selatan, Banten 15413',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLAh102kPFVk9yDrJLaGAyQZeN6UmpNFZKQVy98X5LXduIq0OE',
        createdAt: new Date(),
        updatedAt: new Date(),
        title : 'Rock Festival',
        price : 400000,
        description :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        category_id: 3,
        address : 'Kec. Ciputat, Kota Tangerang Selatan, Banten 15413',
        user_id:1,
      },
      //programing
      {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSa73VG8_1wSYZYVctzHt4gBRys10x_RFy6hM6cJ8xsEPU1BB2',
        title : 'Dumbwyas Bootcam',
        category_id: 1,
        user_id:1,
        price : 500000,
        description :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        address : 'Kec. Ciputat, Kota Tangerang Selatan, Banten 15413',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image : 'https://androbuntu.com/wp-content/uploads/2019/09/Pengalaman-Kursus-Online-di-Udemy-by-Androbuntu.com_-696x392.jpg',
        title : 'Udemy Bootcamp',
        category_id: 1,
        price : 100000,
        description :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        user_id:3,
        address : 'Kec. Ciputat, Kota Tangerang Selatan, Banten 15413',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('events', null, {});
  }
};
