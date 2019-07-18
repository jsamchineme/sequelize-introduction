import { User, Post } from '../models';

export const createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  return res.status(201).send({
    data: newUser
  })
}

export const getAllUsers = async (req, res) => {
  const allUsers = await User.findAll({
    include: {
      model: Post,
      as: 'posts'
    }
  });
  return res.status(200).send({
    data: allUsers
  });
}

export const followUser = async (req, res) => {
  const { userId, followerId } = req.params;

  const user = await User.findByPk(userId);
  const follower = await User.findByPk(followerId);

  await user.addFollowers(follower);

  const followers = await user.getFollowers();

  return res.status(200).send({
    followers
  });
}

export const getUserFollowings = async (req,res) => {
  const { userId } = req.params;
  const user = await User.findByPk(userId);
  const userFollowings = await user.getFollowings();

  const followings = userFollowings.map(({ firstname, lastname, id, UserFollower }) => {
    const followerId = UserFollower.userId
    return {
      id,
      firstname,
      lastname,
      followerId
    }
  });

  return res.status(200).send({
    data: followings
  })
}