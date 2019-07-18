import { Router } from 'express';
import { createPost, getUserPosts, getGroupPosts } from '../controllers/posts';

const postRoutes = Router();

postRoutes.post("/", createPost);
postRoutes.get("/user/:userId", getUserPosts);
postRoutes.get("/group/:groupId", getGroupPosts);


export default postRoutes;