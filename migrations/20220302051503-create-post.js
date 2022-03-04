'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      caption: {
        type: Sequelize.STRING
      },
      AccountId: {
        type: Sequelize.INTEGER,
        references: {
          model: "AccountProfiles",
          key: "id"
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      photoLink: {
        type: Sequelize.STRING
      },
      postDate: {
        type: Sequelize.DATE
      },
      hashtag: {
        type: Sequelize.STRING
      },
      like: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};