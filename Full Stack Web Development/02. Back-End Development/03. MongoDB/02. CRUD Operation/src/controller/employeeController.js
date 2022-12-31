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

export async function fetchEmployeeById(req,res){
    try {
        const employee = await employeeModel.findById(req.params.id);
        if(employee){
            res.status(StatusCodes.OK).json(employee);
        }else{
            res.status(StatusCodes.NOT_FOUND).json({message:'Error while Fetching employee by id'});
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error has occured while fetching the Employee by id'});
    }
}
export async function fetchEmployeeByName(req,res){
    try {
      const employee =  await employeeModel.find({name:req.params.name});
      if(employee){
        res.status(StatusCodes.OK).json(employee);
      }else{
        res.status(StatusCodes.NOT_FOUND).json({message:'Employee Not Found by fetching by Name'});
      }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error while Fetching the employee by the Name'});
    }
}

export async function fetchEmployeeByPhone(req,res){
    try {
        const employee = await employeeModel.findOne({phone:req.params.phone});
        if(employee){
            res.status(StatusCodes.OK).json(employee);
        }else{
            res.status(StatusCodes.NOT_FOUND).json({message:'Employee is not found by phone numer'})
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error while fetching the employee by the phone'});
    }
}


// DELECT 

export async function deleteEmployee(req,res){
    try {
       await employeeModel.findByIdAndDelete(req.params.id);
       res.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'error occured while deleting employee'});
    }
}

export async function updateEmployee(req,res){
    try {
       await employeeModel.findByIdAndUpdate(req.params.id ,req.body);
        res.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error occur while updating employee'});
    }
}