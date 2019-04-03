import db from '../models';


export const createUser = async (req, res) => {
  const newUser = await db.User.create(req.body);

  return res.status(201).send({
    data: newUser
  });
}

export const getAllUsers = async (req, res) => {
  const allUsers = await db.User.findAll();

  return res.status(201).send({
    data: allUsers
  });
}

export const followUser = async (req, res) => {
  const { userId, followerId } = req.params;
  const user = await db.User.findByPk(userId);
  const follower = await db.User.findByPk(followerId);

  const newFollowing = await user.addFollowers(follower);

  const followers = await user.getFollowers();

  const userData = user.toJSON();
  userData.followers = followers.map(item => {
    return {
      id: item.id,
      firstname: item.firstname,
      lastname: item.lastname,
    };
  });

  return res.status(201).send({
    data: userData
  });
}