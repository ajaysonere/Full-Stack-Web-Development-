import { StatusCodes } from "http-status-codes"
import { getEmployees, insertEmployees } from "../services/employeeservice.js";

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