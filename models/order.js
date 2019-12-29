'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    event_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    payment_status: DataTypes.INTEGER,
    checking_status: DataTypes.INTEGER
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};