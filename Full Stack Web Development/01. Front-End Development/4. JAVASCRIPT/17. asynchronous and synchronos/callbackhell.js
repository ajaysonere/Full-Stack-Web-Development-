// callback Function 
function loadScript(src){
    let script = document.createElement("script");
    script.src = src;
    script.onload = ()=>{
      console.log("Loaded script with SRC ");
    }
    document.body.appendChild(script);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");