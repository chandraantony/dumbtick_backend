'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    id_user: DataTypes.INTEGER,
    id_event: DataTypes.INTEGER
  }, {});
  Favorite.associate = function(models) {
    Favorite.belongsTo(models.event, {
      as : 'eventId',
      foreignKey : 'id_event',
    })

    Favorite.belongsTo(models.user, {
      as : 'userId',
      foreignKey : 'id_user',
    })
  };
  return Favorite;
};