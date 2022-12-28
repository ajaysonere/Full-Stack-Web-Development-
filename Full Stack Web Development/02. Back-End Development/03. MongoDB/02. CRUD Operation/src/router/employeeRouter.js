import express from 'express';
import { fetchAllEmployee, saveEmployee } from '../controller/employeeController.js';

const employeeRouter = express.Router();

employeeRouter.post('/employees',saveEmployee);
employeeRouter.get('/employees',fetchAllEmployee);

export default employeeRouter;