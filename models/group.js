module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING
  }, {});
  Group.associate = function(models) {
    Group.hasMany(models.Post, {
      foreignKey: 'resourceId',
      as: 'posts',
      scope: {
        type: 'group'
      }
    }),
    Group.belongsToMany(models.User, {
      foreignKey: 'groupId',
      otherKey: 'userId',
      as: 'users',
      through: 'UserGroup',
      timestamps: false,
    });
  };
  return Group;
};