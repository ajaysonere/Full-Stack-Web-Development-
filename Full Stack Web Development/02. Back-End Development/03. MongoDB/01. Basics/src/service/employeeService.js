let employees = [];

export function insertEmployee(employee){
    employees.push(employee);
}

export function getAllEmployee(){
    return employees;
}

export function getEmployeeById(id){
    for(let i=0;i<employees.length;i++){
        if(employees[i].id == id){
            return employees[i];
        }
    }
}

export function getHighestSalaryEmployee(){
    let highestSalary =0;
    let highestSalaryEmployee;
    for(let i=0;i<employees.length;i++){
        if(employees[i].salary > highestSalary){
            highestSalary = employees[i].salary;
            highestSalaryEmployee = employees[i];
        }
    }
    return highestSalaryEmployee;
}

export function getEmployeeByName(name){
    for(let i=0;i<employees.length;i++){
        if(employees[i].name == name){
            return employees[i];
        }
    }
}