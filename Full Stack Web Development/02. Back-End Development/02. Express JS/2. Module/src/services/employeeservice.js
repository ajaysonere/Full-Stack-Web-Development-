let employees = [];

export function insertEmployees (employee){
    employees.push(employee);
}

export function getEmployees (){
    return employees;
}

export function getEmployeeById(id){
    for(let i=0;i<employees.length;i++){
        if(employees[i].id == id){
            return employees[i];
        }
    }
}

export function getEmployeeByName(name){
    console.log(name);
    for(let i=0;i<employees.length;i++){
        let employeeName = employees[i].name;
        if(employeeName == name){
            console.log("inside name "+employees[i].name);
            return employees[i];
        }
    }
}

export function getHighestSalaryEmployee(){
    let highestSalary=0;
    let highestSalaryEmployee;
    for(let i=0;i<employees.length;i++){
        if(employees[i].salary > highestSalary){
            console.log("inside highestSalary" + highestSalary);
            highestSalary = employees[i].salary;
            highestSalaryEmployee = employees[i];
        }
    }
    console.log("outside"+highestSalaryEmployee);
   return highestSalaryEmployee;
}