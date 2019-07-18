module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: DataTypes.STRING,
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    published: DataTypes.BOOLEAN,
    resourceId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};