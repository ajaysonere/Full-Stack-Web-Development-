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
document.write(` <br> ${object.marks}`);

for(i=0;i<object.address.length;i++){
    console.log(object.address[i]);
}
for(i=0;i<object.address.length;i++){
    document.write(` <br> ${object.address[i]}`)
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
