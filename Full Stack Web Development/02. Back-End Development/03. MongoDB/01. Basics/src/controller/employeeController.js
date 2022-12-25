import StatusCodes from 'http-status-codes'
import { getAllEmployee, getEmployeeById, getEmployeeByName, getHighestSalaryEmployee, insertEmployee } from '../service/employeeService.js';


export function processMainPage(req,res){
   res.status(StatusCodes.OK).json({message:'This is Main Page'});
}

export function saveEmployee(req,res){
    try {
        insertEmployee(req.body);
        res.status(StatusCodes.CREATED).json({message:'Employee is Created '});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error In Saving Employee'});
    }
}

export function fetchAllEmployee(req,res){
    try {
        const employee = getAllEmployee();
        if(employee.length>0){
            res.status(StatusCodes.OK).json(employee);
        }else{
            res.status(StatusCodes.NOT_FOUND).json({message:'Employee is not Found'});
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error in fetching Employee'});
    }
}

export function fetchEmployeeById(req,res){
    try {
        const employee = getEmployeeById(req.params.id);
        if(employee){
            res.status(StatusCodes.OK).json(employee);
        }else{
            res.status(StatusCodes.NOT_FOUND).json({message:'Employee Not Found'});
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error In Fetching Employee By id'});
    }
}
export function fetchEmployeeByName(req,res){
    try{
        let employee = getEmployeeByName(req.params.name);
        if(employee){
            res.status(StatusCodes.OK).json(employee);
        }else{
            res.status(StatusCodes.NOT_FOUND).json({message:'Employee Not Found'});
        }
    }
    catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error in Fetching Employee By name'});
    }
}
export function fetchHighestSalaryEmployee(req,res){
    try {
        let employee = getHighestSalaryEmployee();
        res.status(StatusCodes.OK).json(employee);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Error in fetching highest Salary Employee"});
    }
}