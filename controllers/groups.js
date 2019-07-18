import { Group, User } from '../models';

export const createGroup = async (req, res) => {
  const newGroup = await Group.create(req.body);

  return res.status(200).send({
    data: newGroup
  })
}

export const getAllGroups = async (req, res) => {
 
}

export const addUserToGroup = async (req, res) => {
  
}