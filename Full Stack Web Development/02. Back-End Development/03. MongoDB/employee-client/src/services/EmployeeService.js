import axios from "axios";

export function  saveEmployee(employee){
   return axios.post("http://localhost:7800/employees",employee);
}
