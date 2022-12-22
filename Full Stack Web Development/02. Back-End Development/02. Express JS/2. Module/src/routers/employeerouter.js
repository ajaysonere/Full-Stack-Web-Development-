import express from 'express';
import { fetchAll, saveEmployees } from '../controllers/employeecontroller.js';

const employeeRouter = express.Router();

employeeRouter.post('/employees',saveEmployees);

employeeRouter.get('/employees',fetchAll);

export default employeeRouter;