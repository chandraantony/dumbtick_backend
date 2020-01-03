'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Chandra',
        username: 'AGoodMan',
        email: 'chandra.ant@gmail.com',
        password : '123123',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpCd7RLiyeZPcPlGp3pXh0UEkzRZ6K7bQx2ckyfnpbLYMDp2wx',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ipul',
        username: 'ADog',
        email: 'ipul.ant@gmail.com',
        password : '123123',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpCd7RLiyeZPcPlGp3pXh0UEkzRZ6K7bQx2ckyfnpbLYMDp2wx',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Randi',
        username: 'ACat',
        email: 'randi.ant@gmail.com',
        password : '123123',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpCd7RLiyeZPcPlGp3pXh0UEkzRZ6K7bQx2ckyfnpbLYMDp2wx',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Samuel',
        username: 'ALion',
        email: 'samuel.ant@gmail.com',
        password : '123123',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpCd7RLiyeZPcPlGp3pXh0UEkzRZ6K7bQx2ckyfnpbLYMDp2wx',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'faisal',
        username: 'ABadKid',
        email: 'faisal.ant@gmail.com',
        password : '123123',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpCd7RLiyeZPcPlGp3pXh0UEkzRZ6K7bQx2ckyfnpbLYMDp2wx',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
