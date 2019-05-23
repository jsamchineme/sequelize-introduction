'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Group, {
      foreignKey: 'userId',
      otherKey: 'groupId',
      through: 'UserGroup',
      as: 'groups',
      timestamps: false,
    });
    User.belongsToMany(models.User, {
      foreignKey: 'userId',
      otherKey: 'followerId',
      through: 'UserFollower',
      as: 'followers',
      timestamps: false,
    });
    User.hasMany(models.Post, {
      foreignKey: 'userId',
      otherKey: 'postId',
      as: 'posts'
    });
  };
  return User;
};