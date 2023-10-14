console.log("Hello World");

let arr = [10,20,'Mr.Pappu',"Ajay"];
console.log(arr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}
// let k=0;
// do{
//     console.log(arr[k]);
//     k++;
// }while(k<5);


arr = [10,20,30,4,50];
var max = arr[0];
var min = arr[0];
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max= arr[i];
    }
    if(arr[i]<min){
        min = arr[i];
    }
}
console.log(max);
console.log(min);

 