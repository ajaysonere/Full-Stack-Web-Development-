import express from 'express';
import { fetchAllEmployee, fetchEmployeeById, fetchEmployeeByName, fetchHighestSalaryEmployee, processMainPage, saveEmployee } from '../controller/employeeController.js';

const employeeRouter = express.Router();

employeeRouter.get('/', processMainPage);

employeeRouter.post('/employee' , saveEmployee);

employeeRouter.get('/employee', fetchAllEmployee);

employeeRouter.get('/employee/highestSalary',fetchHighestSalaryEmployee);

employeeRouter.get('/employee/:id',fetchEmployeeById);

employeeRouter.get('/employee/byname/:name',fetchEmployeeByName);

export default employeeRouter;