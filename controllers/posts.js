import { Post, User, Group, Sequelize } from '../models';

export const createPost = async (req, res) => {
  const newPost = await Post.create({
    ...req.body,
    published: false,
    userId: req.body.userId
  });

  return res.status(200).send({
    data: newPost
  });
}

export const getUserPosts = async (req, res) => {
  const user = await User.findByPk(req.params.userId);
  const userPosts = await user.getPosts();

  return res.status(200).send({
    data: userPosts
  });
}

export const getGroupPosts = async (req, res) => {
  const group = await Group.findByPk(req.params.groupId);
  const groupPosts = await group.getPosts();

  return res.status(200).send({
    data: groupPosts
  });
}


export const getAllPosts = async (req, res) => {

}