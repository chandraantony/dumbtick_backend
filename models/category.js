'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  category.associate = function(models) {
    category.hasMany(models.event, {
      as : 'categoryId', 
      foreignKey : 'category_id'});
  };
  return category;
};