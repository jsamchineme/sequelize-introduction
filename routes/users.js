import { Router } from 'express';
import { createUser, getAllUsers, followUser, getUserFollowings } from '../controllers/users';

const userRoutes = Router();

userRoutes.post("/", createUser);
userRoutes.get("/", getAllUsers);
userRoutes.post("/:userId/followers/:followerId", followUser);
userRoutes.post("/:userId/followings", getUserFollowings);


export default userRoutes;