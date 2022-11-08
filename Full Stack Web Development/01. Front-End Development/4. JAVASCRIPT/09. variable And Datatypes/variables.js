function multiplication(x,y){
    if(x%3==0){
        var z = 2*x*y;
    }
    else{
        var w = 3*x*y;
        if(w>0){
            let cc = 10;
            console.log(cc)
        }
    }
    console.log(z);
    console.log(w);
    console.log(cc);  // error
    const a = 10;  // can't midify value;
    console.log(a);

}

// console.log(z);
multiplication(4,3);