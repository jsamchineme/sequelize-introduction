'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    published: DataTypes.BOOLEAN
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};