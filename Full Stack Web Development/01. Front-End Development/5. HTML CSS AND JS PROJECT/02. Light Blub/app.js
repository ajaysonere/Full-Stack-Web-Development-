
// const switch = document.querySelector('#switch');
// const bulb = document.querySelector('#blub');

// switch.addEventListener('click',()=>{
//     if(bulb.scr.match('on')){
//         bulb.src = "./images/onblub.gif";
//     }else{
//         bulb.src = "./images/offblub.gif";
//     }
// })


const Fswitch = document.querySelector('#switch');

const blub = document.querySelector('#blub');

Fswitch.addEventListener('click',function(){
    if(blub.src.match('off')){
      blub.src = "./images/onblub.gif";
      Fswitch.innerHTML = "Turn OFF"
    }else{
        blub.src = "./images/offblub.gif"
        Fswitch.innerHTML = "Turn ON"
    }
})
