function myAxios(method,url,body=null){
    return new Promise ((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(method,url,true);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.onload = ()=>{
            if(xhr.status >= 400){
                 reject(xhr.response);
                 console.log("Failed");
            }else{
                resolve(xhr.response)
            }
        }
        
        xhr.onerror=()=>{
            reject(xhr.response);
        }
        
        xhr.send(JSON.stringify(body));
    })
}

let url = 'https://jsonplaceholder.typicode.com/users';

myAxios ('POST',url,{
    "name":"Ajay Sonere",
    "job":"Student"
}).then((res)=>{
    console.log("Message From Then Blcok ",res);
}).catch((res)=>{
   console.log("Message From Catch Block :",res);
});