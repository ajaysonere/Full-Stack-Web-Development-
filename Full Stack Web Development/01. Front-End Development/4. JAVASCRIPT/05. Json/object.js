const personal =  {
    FatherName : "Mr.Pappu Sonere",
    MotherName : "Ms.Kiran Sonere",
    BrotherName : "Vijay Sonere",
    SisterName : "Anjali Sonere",
    GrandMa : "Ramkor Bai"
}

const user = {
    firstName :"Ajay",
    lastName :"Sonere",
    email:"ajay@gmail.com",
    mobile:"9977449230",
    Address: function(){
             console.log(personal);
    }(), 
};

console.log(user);
