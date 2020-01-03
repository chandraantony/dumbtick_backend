'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Programing',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpCd7RLiyeZPcPlGp3pXh0UEkzRZ6K7bQx2ckyfnpbLYMDp2wx',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sport',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSt4eg_FxcFy8kM-1WM0IdS5ooxaoqMzRBuqJHVSJlMGgNepdO-',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Music',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS471XTaYAhds4x6dHOFCVL5Ivqqr8yBaXnHXYd3sZ291KO2h-t',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Science',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTfFs0OmixePnNjSAlJRhcphhljrDRWn-FDE4pbxKuaP3LuQ7k',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Politic',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYKl6KR3rcxSfqAfK_0ry1IqsPbDwww0DSGfecSCj3qjr2ihll',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

     
  ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
