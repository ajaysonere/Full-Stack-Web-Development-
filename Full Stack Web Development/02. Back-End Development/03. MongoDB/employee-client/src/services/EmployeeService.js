import axios from "axios";

export function  saveEmployee(employee){
   return axios.post("http://localhost:7800/employees",employee);
}

export function fetchAllEmployee(){
   return axios.get("http://localhost:7800/employees");
}

export function deleteEmployee(id){
    return axios.delete("http://localhost:7800/employees/"+id);
}

export function updateEmployee(employee){
  return axios.put("http://localhost:7800/employees/"+employee);
}