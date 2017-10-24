'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'comments',
      'articleId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "articles",
          key: "id"
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
