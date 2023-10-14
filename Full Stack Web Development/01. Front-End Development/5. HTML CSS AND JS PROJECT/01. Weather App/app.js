        function fetchdata(place) {
            var hrx = new XMLHttpRequest();
            hrx.open("GET", `http://api.weatherapi.com/v1/current.json?key=f6730e56e769448ca1d83130222211&q=${place}&aqi=no`);
            hrx.send();
            hrx.onreadystatechange = () => {
                if (hrx.readyState == 4 && hrx.status == 200) {
                    var data = JSON.parse(hrx.responseText)
                    console.log(data)
                    console.log(data.current.condition.icon, data.current.condition.text, data.location.name, data.current.temp_c)
                    var img = document.getElementById('icon')
                    img.setAttribute("src", "http:" + data.current.condition.icon)
                    var weather = document.getElementById("weather-condition")
                    weather.innerHTML = data.current.condition.text
                    var temp_c = document.getElementById("temp")
                    temp.innerHTML = `${data.current.temp_c}&deg; C`
                    var city = document.getElementById("location")
                    city.innerHTML = `${data.location.name}`
                    var state = document.getElementById("state")
                    state.innerHTML = `${data.location.region}`

                }
            }
        }
        function place() {
            var place = document.getElementById("place").value;
            fetchdata(place);
        }

        function drop(n) {
            if (document.getElementsByClassName("dropdown-item")[n].innerHTML == "Indore") {
                return fetchdata("indore");
                console.log(document.getElementsByClassName("dropdown-item")[n].innerHTML)
            }
            else if (document.getElementsByClassName("dropdown-item")[n].innerHTML == "Mumbai") {
                return fetchdata("mumbai");
                console.log(document.getElementsByClassName("dropdown-item")[n].innerHTML)
            }
            else if (document.getElementsByClassName("dropdown-item")[n].innerHTML == "Goa") {
                console.log(document.getElementsByClassName("dropdown-item")[n].innerHTML);
                return fetchdata("goa");
            }
        }