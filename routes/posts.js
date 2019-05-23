import { Router } from 'express';
import { createPost } from '../controllers/posts';

const postRoutes = Router();

postRoutes.post("/", createPost);
// postRoutes.get("/", getAllPosts);


export default postRoutes;