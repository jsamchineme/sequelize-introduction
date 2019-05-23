import { User } from '../models';

export const createUser = async (req, res) => {
  const newUser = await User.create(req.body);

  return res.status(200).json({
    data: newUser
  });
}

export const getAllUsers = async (req, res) => {
  const users = await User.findAll();

  return res.status(200).json({
    data: users
  });
}

export const followUser = async (req, res) => {
  const { userId, followerId } = req.params;

  const user = await User.findByPk(userId);
  const follower = await User.findByPk(followerId);
  await user.addFollowers(follower);

  const followers = await user.getFollowers();

  return res.status(200).json({
    data: followers
  });
}