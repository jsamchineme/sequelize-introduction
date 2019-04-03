import { Router } from 'express';
import { createPost, getAllPosts } from '../controllers/posts';

const postRoutes = Router();

postRoutes.post("/", createPost);
postRoutes.get("/", getAllPosts);


export default postRoutes;