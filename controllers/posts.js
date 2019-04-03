import db from '../models';


export const createPost = async (req, res) => {
  const newPost = await db.Post.create({
    ...req.body,
    userId: req.query.userId
  });

  return res.status(201).send({
    data: newPost
  });
}

export const getAllPosts = async (req, res) => {
  const allPosts = await db.Post.findAll();

  return res.status(201).send({
    data: allPosts
  });
}