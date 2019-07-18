module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserFollower', {
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      followerId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('UserFollower');
  }
};
