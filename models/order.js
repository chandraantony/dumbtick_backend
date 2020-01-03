'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    event_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    payment_status: DataTypes.INTEGER,
    checking_status: DataTypes.INTEGER
  }, {});
  order.associate = function(models) {
    order.belongsTo(models.event, {
      as : 'eventId',
      foreignKey : 'event_id',
    })

    order.belongsTo(models.user, {
      as : 'userId',
      foreignKey : 'user_id',
    })
  };
  return order;
};