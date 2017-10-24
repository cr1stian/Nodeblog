'use strict';
module.exports = (sequelize, DataTypes) => {
  var comment = sequelize.define('comment', {
    body: DataTypes.STRING
  }, {});

  comment.associate = (models) => {
    comment.belongsTo(models.article,{as: 'article', foreignKey: 'articleId'})
  }
  return comment;
};
