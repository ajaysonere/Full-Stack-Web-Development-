// CallBackHell In JavaScript 

// secnario

/*


1.  Register
2.  Send Welcome email
3.  Login
4.  Get user data 
5.  display User Data


*/

// function register(callback){
//    setTimeout(() => {
//        console.log("Register End");
//        callback();
//     },2000);
// }

// function sendEmail(callback){
//   setTimeout(() => {
//     console.log("Email End");
//     callback();
//   },3000);
// }

// function login(callback){
//   setTimeout(() => {
//     console.log("Login End");
//     callback();
//   },6000);
// }

// function getUserData(callback){
//   setTimeout(() => {
//     console.log("GetUserData End");
//     callback();
//   },4000);
// }

// function displayUserData(){
//   setTimeout(() => {
//     console.log("Display user data End");
//   },1000);
// }



// // Call Back Hell 
// register(()=>{
//   sendEmail( ()=>{
//     login(()=>{
//       getUserData(()=>{
//         displayUserData();
//       });
//     });
//   });
// });

// console.log("Othe Application Works");


console.log("Callback In Progess...")

setTimeout(()=>{
  console.log("Fetching Data Start :");
  let ids = [10,20,30,40,50];
  console.log(ids);
  console.log("Fetching Data End");
  setTimeout((ids)=>{
     console.log("Fetching Ideas Start :");
     let id = {
              id:2,
              fastname:"Ajay",
              lastname:"sonere",
              age:20
            }
    console.log(id);
    setTimeout((age)=>{
      console.log(`Hello I am checking ,Your Eligibility  ${age}`);
      if(age>18){
        console.log("Your Are Eligibal");
      }else{
        console.log("Your are not Eligibal");
      }
    },8000,id.age)
  },5000,ids[2])
},3000)