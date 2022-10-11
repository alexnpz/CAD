var app = (function() {
    'use strict';
    // Your code goes here!
     
    // Function to change button state and icon state
    // TODO, icon state blue and yellow, primary and warning
    function btChange (id, icon){
    let btnChange = document.getElementById(id);
    let iconChange = document.getElementById(icon);
    let classesBtnChange = btnChange.classList;
    let classesIconChange = iconChange.classList;
    let condChange = false;
    btnChange.onclick = function(){
        //
        if (condChange && icon=='ambientMusic'){
            classesBtnChange.remove('fa-toggle-off');
            classesBtnChange.add('fa-toggle-on');
            classesIconChange.add('text-primary');
            
        } //
        else if (condChange && icon!='ambientMusic'){
            classesBtnChange.remove('fa-toggle-off');
            classesBtnChange.add('fa-toggle-on');
            classesIconChange.add('text-warning');
            
        } //
        else if(!condChange && icon=='ambientMusic'){
            classesBtnChange.remove('fa-toggle-on');
            classesBtnChange.add('fa-toggle-off');
            classesIconChange.remove('text-primary');
            
        } //
        else{
            classesBtnChange.remove('fa-toggle-on');
            classesBtnChange.add('fa-toggle-off');
            classesIconChange.remove('text-warning');
            
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

    // It works ! but its not a function implementation
    let min = 10;
    let max = 30;
    let temperatureKitchenChange = document.getElementById('temperatureKitchenChange');
    let temperatureLvRoomChange = document.getElementById('temperatureLvRoomChange');

    setInterval(function() {temperatureKitchenChange.innerHTML = 
        Math.floor(Math.random() * (max - min + 1)) + min},
    5000);
    
    setInterval(function() {temperatureLvRoomChange.innerHTML = 
        Math.floor(Math.random() * (max - min + 1)) + min},
    5000);
    
    // Implement a functionality to update the date when the page is loaded, and to update the
    //hours, minutes and seconds automatically, every second
    let today = new Date();
    let timer = document.getElementById('timeChange');
    
    setInterval(function() {timer.innerHTML =
        `${today.getHours()}-${today.getMinutes()}-${today.getSeconds()}`},
    1000);

    let dateTime = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDay()}`;
    //console.log(typeof(dateTime));
    document.getElementById('dateChange').innerHTML= dateTime;

 
    })();