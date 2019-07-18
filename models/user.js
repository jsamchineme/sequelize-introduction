module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Post, {
      foreignKey: 'resourceId',
      as: 'posts',
      scope: {
        type: 'user'
      }
    }),
    User.belongsToMany(models.User, {
      foreignKey: 'userId',
      otherKey: 'followerId',
      as: 'followers',
      through: 'UserFollower',
      timestamps: false,
    });
    User.belongsToMany(models.User, {
      foreignKey: 'followerId',
      otherKey: 'userId',
      as: 'followings',
      through: 'UserFollower',
      timestamps: false,
    });
    User.belongsToMany(models.Group, {
      foreignKey: 'userId',
      otherKey: 'groupId',
      as: 'groups',
      through: 'UserGroup',
      timestamps: false,
    });
  };
  return User;
};