console.log("2D Array");
arr = [[10,20,30],[11,12,13,14],[22,44,55,56 ,58]];
console.log(arr.length);
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
       console.log(`${arr[i][j] }`);
    }
}


a1 = [10,20,30,40];
a2 = [50,60,70,80];
a3 = [...a1,...a2];
console.log(a3);