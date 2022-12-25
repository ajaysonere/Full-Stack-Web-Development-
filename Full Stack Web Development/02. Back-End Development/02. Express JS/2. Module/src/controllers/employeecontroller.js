import { StatusCodes } from "http-status-codes"
import { getEmployeeById, getEmployeeByName, getEmployees, getHighestSalaryEmployee, insertEmployees } from "../services/employeeservice.js";

export function saveEmployees(req,res){
    
    try {
        insertEmployees(req.body); 
        res.status(StatusCodes.CREATED).json({message :'Employee created '});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message :"Error in saving employee "});
    }

}

export function fetchAll(req,res){
    try {

    let employees=getEmployees();

    if(employees.length >0){
        res.status(StatusCodes.OK).json({employees});
    }else{
        res.status(StatusCodes.NOT_FOUND).json({message:"No employee Found"});
    }
 } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error in Fetching the Employee " });
    }
}

export function fetchEmployeeById(req,res){
    try {
       const employee= getEmployeeById(parseInt(req.params.id));
       console.log("inside id "+employee);
       if(employee){
          res.status(StatusCodes.OK).json(employee);
       }else{
        res.status(StatusCodes.NOT_FOUND).json({message:'Employee Not Found'});
       }
    } catch (error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Something Went Wrong While fatching Employee By Id \n Try Again After Sometime :'});
    }
}

export function fetchEmployeeByName(req,res){
    try {
        const employee = getEmployeeByName(req.params.name);
       console.log("inside name"+employee);
       if(employee){
        res.status(StatusCodes.OK).json(employee);
       }else{
        res.status(StatusCodes.NOT_FOUND).json({message:'Employee Is not Present'});
       }     
    } catch (error) {
       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Something Went Wrong While Fetching Employee By Name \n Try After Again After Some Time'}); 
    }
}

export function fetchHighestSalary(req,res){
    try {
        const employee = getHighestSalaryEmployee();
        res.status(StatusCodes.OK).json(employee);    
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:'Error in Fetching Highest Salary'});
    }
}