import { Router } from 'express';
import { createUser, getAllUsers, followUser } from '../controllers/users';
import { addUserToGroup } from '../controllers/groups';

const userRoutes = Router();

userRoutes.post("/", createUser);
userRoutes.get("/", getAllUsers);
userRoutes.post("/:userId/groups/:groupId", addUserToGroup);
userRoutes.post("/:userId/followers/:followerId", followUser);


export default userRoutes;