'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    dateBirth: DataTypes.DATE,
    phone: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    user.hasMany(models.event, {
      as : 'userId', 
      foreignKey : 'user_id'});
  };
  return user;
};