$().ready(function () {
    // Panel for  Temperature (current), Max. Temperature, Min. Temperature, Humidity, Sunrise time, Sunset time
    $oldTimeFetch = new Date().getTime();
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?units=metric&q=leiria&appid=b919808d903be475ea8d3463b4b9bf3e',
        function(response) {
            $('#tmpWeather').text(response.main.temp + ' ºC');
            $('#tmpMaxWeather').text(response.main.temp_min + ' ºC');
            $('#tmpMinWeather').text(response.main.temp_max + ' ºC');
            $('#humidity').text(response.main.humidity + ' %');
            // UTC unix
            $sunriseUTC = new Date(response.sys.sunrise);
            $localDateSunrise = `${$sunriseUTC.getHours()}:${$sunriseUTC.getMinutes()}:${$sunriseUTC.getSeconds()} AM`;
            $('#sunriseTime').text($localDateSunrise);
            $sunsetUTC = new Date(response.sys.sunset);
            $localDateSunset = `${$sunsetUTC.getHours()}:${$sunsetUTC.getMinutes()}:${$sunsetUTC.getSeconds()} PM`;
            $('#sunsetTime').text($localDateSunset);
            // get time when info was fetched, then change it dynamically seconds, then minutes, then hours 
            // delta = newTimeFetch - oldTimeFetch
            $newTimeFetch = new Date().getTime();
            $delta = $newTimeFetch - $oldTimeFetch;
            if ($delta < 60){
                $lastTime = String($delta) + ' seconds ago';
            } else if($delta > 60 && $delta < 3600 ){
                $minutes = Math.floor($delta / 60);
                $lastTime = String($minutes) + ' minutes ago';
            } else{
                $hours = Math.floor($delta / 3600);
                $lastTime = String($hours) + ' hours ago';
            }
            $('#fetchTime').text($lastTime);
            $oldTimeFetch = $newTimeFetch;     
    });

});

var app = (function() {
    'use strict';
    // Your code goes here!
    // Function to change button state and icon state
    function btChange (id, icon){
    let btnChange = document.getElementById(id);
    let iconChange = document.getElementById(icon);
    let classesBtnChange = btnChange.classList;
    let classesIconChange = iconChange.classList;
    let condChange = false;
    btnChange.onclick = function(){
        if (condChange && icon=='ambientMusic'){
            classesBtnChange.remove('fa-toggle-off');
            classesBtnChange.add('fa-toggle-on');
            classesIconChange.add('text-primary');
            
        }
        else if (condChange && icon!='ambientMusic'){
            classesBtnChange.remove('fa-toggle-off');
            classesBtnChange.add('fa-toggle-on');
            classesIconChange.remove('far');
            classesIconChange.add('fas');
            classesIconChange.add('text-warning');
            
        }
        else if(!condChange && icon=='ambientMusic'){
            classesBtnChange.remove('fa-toggle-on');
            classesBtnChange.add('fa-toggle-off');
            classesIconChange.remove('text-primary');
            
        }
        else{
            classesBtnChange.remove('fa-toggle-on');
            classesBtnChange.add('fa-toggle-off');
            classesIconChange.remove('text-warning');
            classesIconChange.remove('fas');
            classesIconChange.add('far');
            
        }
        condChange = !condChange;  
     }

    };
    
    btChange('iconKitchenLights','kitchenLights');
    btChange('iconCeilingLights','ceilingLights');
    btChange('iconAmbientLights','ambientLights');
    btChange('iconAmbientMusic','ambientMusic');
    
    // Temperature timer every 5000 -> 5 seconds, id="temperatureChange"
    // TODO function 
    /*function updateTemp(id){
        
        let temperatureChange = document.getElementById(id).innerHTML = 
           Math.floor(Math.random() * (max - min + 1)) + min;
        
    };
    //var tmpKitchen = updateTemp('temperatureKitchenChange') ;
    //var tmpLvRoom = updateTemp('temperatureLvRoomChange') ;
    //setInterval(tmpLvRoom,5000);
    */

    // It works ! but its not a function packetization
    let min = 10;
    let max = 30;
    let temperatureKitchenChange = document.getElementById('temperatureKitchenChange');
    let temperatureLvRoomChange = document.getElementById('temperatureLvRoomChange');

    setInterval(function() {temperatureKitchenChange.innerHTML = 
        Number.parseFloat(Math.random() * (max - min + 1) + min).toFixed(1)},
    5000);
    
    setInterval(function() {temperatureLvRoomChange.innerHTML = 
        Number.parseFloat(Math.random() * (max - min + 1) + min).toFixed(1)},
    5000);
                
    //     Math.floor(Math.random() * (max - min + 1)) + min},
    // 5000);
    // Math.prototyp.randomMinMax = function (min,max)
    
    // Implement a functionality to update the date when the page is loaded, and to update the
    //hours, minutes and seconds automatically, every second
    
    let timer = document.getElementById('timeChange');
    setInterval(function() {
        const todayLocalVar = new Date();
        const hours = ('0' + String(todayLocalVar.getHours())).slice(-2);
        const minutes = ('0' + String(todayLocalVar.getMinutes())).slice(-2);
        const seconds = ('0' + String(todayLocalVar.getSeconds())).slice(-2);
        timer.innerHTML = `${hours}:${minutes}:${seconds}`},
    1000);
    
    //`${today.getFullYear()}-${today.getMonth()+1}-${today.getDay()}`
    //TODO function to packetize format year-month-day
    const today = new Date();
    const year = String(today.getFullYear());
    const month = ('0'+ String(today.getMonth()+1)).slice(-2);
    const day = ('0'+ String(today.getDate())).slice(-2);
    
    //let day = String(today.getDay());
    console.log(today.getDate());
    document.getElementById('dateChange').innerHTML= 
    `${year}-${month}-${day}`;

    })();