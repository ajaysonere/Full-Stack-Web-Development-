document.write("Script is working :");

object = {
    "id":10,
    "name":"ajay",
    "marks":75,
    "mobile":"9977449230",
    "address": ["Pidhay Bujurag" , "post- naya", "block- badwaha","distrcit-khargone","state- mp"]
};

console.log(object);
console.log(object.id);
console.log(object.name);
console.log(object.marks);
console.log(object.mobile);
// document.write(object); // it will not print anything  
document.write(object.id);
document.write(`${object.marks}`);

for(i=0;i<object.address.length;i++){
    console.log(object.address[i]);
}
for(i=0;i<object.address.length;i++){
    document.write(` ${object.address[i]}`)
}

console.log(object);

student = {
    "firstname": "ajay",
    "lastName" : "sonere",
    "father":"Mr. Pappu",
    "Mother": "Kiran Sonere",
     "grandfather":{
        "name":"Ramchandra",
        "wife":"Ramkorbai",
        "son":"Pappu Sonere"
     }
}

console.log(student);
document.write(`<br> ${student.grandfather.name}`);

document.write(`<br> ${student.grandfather}`);
document.write(`<br> ${student.grandfather.name}`);




let companies = `[
     {
      "name":"Big Corporation",
      "numberOfEmployee":10000,
      "ceo":"Mr. Pappu Sonere",
      "rating":4.6 
    },
    {
       "name":"Small StartUp",
       "numberOfEmployee":100,
       "ceo":"ajay",
       "rating":3.6
    }
]`

console.log(JSON.parse(companies)[0].name);
console.log(JSON.parse(companies)[1].name);
document.write(` ${JSON.parse(companies)[0].ceo}`);

for(i=0;i<companies.length;i++){
    console.log(` ${companies[i]}`);
}