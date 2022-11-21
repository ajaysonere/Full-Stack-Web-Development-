console.log("AJAX IN JS ");
function fetchData(){
    let obj = new XMLHttpRequest();
    obj.open("GET","https://jsonplaceholder.typicode.com/users");
    obj.send();
    obj.onreadystatechange = ()=>{
        if(obj.readyState === 4 && obj.status === 200){
            let data  = JSON.parse(obj.responseText);
            console.log(data);
            let table = document.getElementById("table");
            for(let i=0;i<data.length;i++){
                let tr = document.createElement("tr");
                let idTd = document.createElement("td");
                let nameTd = document.createElement("td");
                let emailTd = document.createElement("td");
                let phoneTd = document.createElement("td");
                idTd.innerHTML = data[i].id;
                nameTd.innerHTML = data[i].name;
                emailTd.innerHTML = data[i].email;
                phoneTd.innerHTML = data[i].phone;
                tr.appendChild(idTd);
                tr.appendChild(nameTd);
                tr.appendChild(emailTd);
                tr.appendChild(phoneTd);
                table.appendChild(tr);
            }
        }

    }
}