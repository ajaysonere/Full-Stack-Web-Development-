import express from 'express';
import { fetchAll, fetchEmployeeById, fetchEmployeeByName, fetchHighestSalary, saveEmployees } from '../controllers/employeecontroller.js';

const employeeRouter = express.Router();

employeeRouter.post('/employees',saveEmployees);

employeeRouter.get('/employees',fetchAll);

employeeRouter.get('/employees/highestSalary',fetchHighestSalary);

employeeRouter.get('/employees/:id',fetchEmployeeById);

employeeRouter.get('/employees/:name',fetchEmployeeByName);


export default employeeRouter;