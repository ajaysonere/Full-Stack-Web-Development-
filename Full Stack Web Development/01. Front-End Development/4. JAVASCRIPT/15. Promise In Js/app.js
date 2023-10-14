/*

1.  Register
2.  Send Welcome email
3.  Login
4.  Get user data 
5.  display User Data

*/

// function register(a,b){
//     setTimeout((a,b)=>{
//         console.log(`Sum is ${a+b}`);
//     },1000,a,b)
// }

// register(10,20);


function register(){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Register End");
        resolve();
     },2000);
   });
}

function sendEmail(){
  return new Promise ((resolve,reject)=>{
    setTimeout(() => {
       return reject('send Email');
        console.log("Email End");
      },3000);
  });
}

function login(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Login End");
        resolve();
      },6000);
  });
}

function getUserData(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("GetUserData End");
        resolve();
      },5000);
  });
}

function displayUserData(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Display user data End");
        resolve();
      },1000);
  })
}

console.log("Promises In Progress :");


// Call Back Hell 
// register(()=>{
//   sendEmail( ()=>{
//     login(()=>{
//       getUserData(()=>{
//         displayUserData();
//       });
//     });
//   });
// });


// register()
// .then(sendEmail)
// .then(login)
// .then(getUserData)
// .then(displayUserData)
// .catch(()=>{
//     console.log("Error While Processing ... ");
// });


async function authenticate(){
   
   try{
    await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
   }
   catch(err){
       console.log("Error Has Occured in "+err);
   }
   throw new Error();
}

authenticate().then(()=>{
    console.log("All Set");
}).catch((err)=>{
    console.log("Error has Occured in Authenticate");
});