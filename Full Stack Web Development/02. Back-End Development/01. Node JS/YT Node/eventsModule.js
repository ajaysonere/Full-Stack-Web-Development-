import Emitter from 'events';

const myEmitter = new Emitter();

// myEmitter.on('someName',(data)=>{
//     console.log(data);
// })

// myEmitter.emit('someName',{
//     name:'Ajay'
// })

class Auth extends Emitter{
    register(username){
        console.log(`Registered Succesfully ${username}`);
        this.emit('registered',username)
    }
} 

const auth = new Auth();

auth.on('registered',(data)=>{
   console.log(`sending Email to : ${data}`);
})

auth.on('registered', (data) => {
    console.log(`sending welcome Email to : ${data}`);
})

auth.register('Ajay');
