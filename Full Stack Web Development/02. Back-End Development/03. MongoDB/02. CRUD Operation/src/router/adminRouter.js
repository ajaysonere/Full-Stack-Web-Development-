import express from 'express';
import { fetchAllAdmin, login, saveAdmin } from '../controller/adminController.js';

const adminRouter = express.Router();

adminRouter.post('/admins',saveAdmin);
adminRouter.post('/admins/login',login);
adminRouter.get('/admins',fetchAllAdmin);
export default adminRouter;