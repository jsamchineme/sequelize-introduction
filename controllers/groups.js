import db from '../models';


export const createGroup = async (req, res) => {
  const newGroup = await db.Group.create(req.body);

  return res.status(201).send({
    data: newGroup
  });
}

export const getAllGroups = async (req, res) => {
  const allGroups = await db.Group.findAll();

  return res.status(201).send({
    data: allGroups
  });
}

export const addUserToGroup = async (req, res) => {
  const { userId, groupId } = req.params;

  const user = await db.User.findByPk(userId);
  const group = await db.Group.findByPk(groupId);

  const newUserGroup = await user.addGroups(group);

  const userData = user.toJSON();
  const groups = await user.getGroups();

  userData.groups = groups.map(item => {
    return {
      id: item.id,
      name: item.name,
    }
  });

  return res.status(200).send({
    data: userData
  })
}