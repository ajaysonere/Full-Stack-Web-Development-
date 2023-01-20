import express from 'express';
import { deleteEmployee, fetchAllEmployee, fetchEmployeeById, fetchEmployeeByName, fetchEmployeeByPhone, saveEmployee, updateEmployee } from '../controller/employeeController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const employeeRouter = express.Router();

employeeRouter.get("/" , (req,res)=>{
    res.send("This is Home Page ");
});
employeeRouter.post('/employees',saveEmployee);
employeeRouter.get('/employees',fetchAllEmployee);
employeeRouter.get('/employees/:id',fetchEmployeeById);
employeeRouter.get('/employees/name/:name',fetchEmployeeByName);
employeeRouter.get('/employees/phone/:phone',fetchEmployeeByPhone);
employeeRouter.delete('/employees/:id',deleteEmployee);
employeeRouter.put('/employees/:id',updateEmployee);

export default employeeRouter;