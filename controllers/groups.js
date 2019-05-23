import { Group, User } from '../models';

export const createGroup = async (req, res) => {
  const newGroup = await Group.create(req.body);

  return res.status(200).json({
    data: newGroup
  });
}

export const getAllGroups = async (req, res) => {
  const groups = await Group.findAll();

  return res.status(200).json({
    data: groups
  });
}

export const addUserToGroup = async (req, res) => {
  const { userId, groupId } = req.params;

  const user = await User.findByPk(userId);
  const group = await Group.findByPk(groupId);
  await user.addGroups(group);

  const groups = await user.getGroups();

  return res.status(200).json({
    data: groups
  });
}