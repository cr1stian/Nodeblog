'use strict';
module.exports = (sequelize, DataTypes) => {
  var article = sequelize.define('article', {
    title: DataTypes.STRING,
    text: DataTypes.STRING
  }, {});

  article.associate = (models) => {
    article.hasMany(models.comment, {as: 'comment', foreignKey: 'articleId'})
  }

  return article;
};
