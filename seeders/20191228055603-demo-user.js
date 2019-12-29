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
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        name: 'Ipul',
        username: 'ADog',
        email: 'ipul.ant@gmail.com',
        password : '123123',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpCd7RLiyeZPcPlGp3pXh0UEkzRZ6K7bQx2ckyfnpbLYMDp2wx',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        name: 'Randi',
        username: 'ACat',
        email: 'randi.ant@gmail.com',
        password : '123123',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpCd7RLiyeZPcPlGp3pXh0UEkzRZ6K7bQx2ckyfnpbLYMDp2wx',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        name: 'Samuel',
        username: 'ALion',
        email: 'samuel.ant@gmail.com',
        password : '123123',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpCd7RLiyeZPcPlGp3pXh0UEkzRZ6K7bQx2ckyfnpbLYMDp2wx',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        name: 'faisal',
        username: 'ABadKid',
        email: 'faisal.ant@gmail.com',
        password : '123123',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpCd7RLiyeZPcPlGp3pXh0UEkzRZ6K7bQx2ckyfnpbLYMDp2wx',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
     
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
