import { Post, User } from '../models';

export const createPost = async (req, res) => {
  const { userId } = req.query;
  const user = await User.findByPk(userId);
  const newPost = await user.createPost({
    ...req.body,
    published: false,
    resourceId: userId,
  });

  return res.status(200).json({
    data: newPost
  });
}