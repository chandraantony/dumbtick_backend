'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Chandra',
        username: 'AGoodMan',
        email: 'chandra.ant@gmail.com',
        password : '123123',
        description : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
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
