import { Router } from 'express';
import { createGroup, getAllGroups } from '../controllers/groups';

const groupRoutes = Router();

groupRoutes.post("/", createGroup);
groupRoutes.get("/", getAllGroups);

export default groupRoutes;