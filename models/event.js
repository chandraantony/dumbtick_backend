'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    image: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    date_start: DataTypes.DATE,
    date_finish: DataTypes.DATE,
    price: DataTypes.INTEGER,
    address: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  event.associate = function(models) {
      event.belongsTo(models.category, {
        as : 'categoryId',
        foreignKey : 'category_id',
      }),
      event.belongsTo(models.user, {
        as : 'userId',
        foreignKey : 'user_id',
      }),
      event.hasMany(models.order, {
        as : 'eventId', 
        foreignKey : 'event_id'});
  };
  return event;
};