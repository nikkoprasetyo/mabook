'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AccountProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AccountProfile.belongsTo(models.User , {foreignKey: 'UserId'})
      AccountProfile.hasMany(models.Post , {foreignKey : 'AccountId'})
    }
  }
  AccountProfile.init({
    UserId: DataTypes.INTEGER,
    profileCaption: DataTypes.STRING,
    profileImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AccountProfile',
  });
  return AccountProfile;
};