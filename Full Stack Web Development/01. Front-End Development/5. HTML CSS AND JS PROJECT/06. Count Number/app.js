// set initialcount
let count =0;

// select value and btn
let value = document.querySelector('#value');
let btns = document.querySelectorAll('.btn');

btns.forEach((btn)=>{
//    console.log(btn)

    //   For value of value in span 
    btn.addEventListener('click',(e)=>{
       const clickbtn = e.target.classList;
       if(clickbtn.contains('decrease')){
        count--;
       }
      else if(clickbtn.contains('increase')){
        count++;
       }
       else{
        count =0;
       }

        //  Text Color 
       if(count>0){
         value.style.color = 'green';
       }
       else if(count<0){
        value.style.color = 'red';
       }
       else{
        value.style.color = 'black';
       }

       value.textContent = count;


    })
})