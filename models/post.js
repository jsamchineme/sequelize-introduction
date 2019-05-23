'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: DataTypes.STRING,
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    published: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    resourceId: DataTypes.INTEGER,
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};