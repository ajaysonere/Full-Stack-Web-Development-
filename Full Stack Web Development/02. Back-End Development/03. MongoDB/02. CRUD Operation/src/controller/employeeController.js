import { StatusCodes } from 'http-status-codes';
import { employeeModel } from '../models/employeeModel.js';


export async function saveEmployee(req,res){
    try {
       const emp =  new employeeModel(req.body);
       const e = await emp.save();
       res.status(StatusCodes.CREATED).json(e);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Something Went Wrong While Saving the Employee'});
    }
}

export async function fetchAllEmployee(req,res){
    try {
           const employee = await employeeModel.find();
           res.status(StatusCodes.OK).json(employee);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error has occured While fetching employee'});
    }
}

export function fetchEmployeeById(req,res){
    try {
        
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error has occured while fetching the Employee by id'});
    }
}