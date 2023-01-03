const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
});
function checkInputs(){
   const usernameValue =  username.value.trim();
   const emailValue =  email.value.trim();
   const passwordValue =   password.value.trim();
   const cpasswordValue =  cpassword.value.trim();

   if(usernameValue === '' ){  
        setErrorFor(username,'UserName cannot be blank');
   }else{
    setSuccessFor(username)
   }
}

function setErrorFor(username,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(username){
     const formControl = input.parentElement;
     formControl.className = "form-control success"
}