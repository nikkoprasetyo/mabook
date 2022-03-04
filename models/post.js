'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.AccountProfile , {foreignKey: 'AccountId'})
    }
  }
  Post.init({
    caption: DataTypes.STRING,
    AccountId: DataTypes.INTEGER,
    photoLink: DataTypes.STRING,
    postDate: DataTypes.DATE,
    hashtag: DataTypes.STRING,
    like: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};