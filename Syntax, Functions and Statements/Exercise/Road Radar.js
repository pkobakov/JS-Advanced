function roadRadar(speed, area){

    const motorWaySpeedLimit = Number(130);
    const interstateSpeedLimit = Number(90);
    const citySpeedLimit = Number(50);
    const residentialSpeedLimit = Number(20);
    const speedingStatus = 'speeding';
    const excessiveSpeedingStatus = 'excessive speeding';
    const recklessStatus = 'reckless driving';
    const motorwayArea = 'motorway';
    const interstateArea = 'interstate';
    const cityArea = 'city';
    const residentialArea = 'residential';
    let status = '';
    let speedLimit = 0;
    let speedDiff = 0;
    let inTheLimit = true;

    function speedLimitCheck(areaSpeedLimit){
        let currentSpeedDiff = 0;
        if(speed > areaSpeedLimit){
            inTheLimit = false;
            currentSpeedDiff = speed - areaSpeedLimit; 
        } 
        return currentSpeedDiff; 
    }

    switch(area){
        case motorwayArea: 
        speedLimit = motorWaySpeedLimit;
        speedDiff = speedLimitCheck(motorWaySpeedLimit);
        ; break;

        case interstateArea: 
        speedLimit = interstateSpeedLimit;
        speedDiff = speedLimitCheck(interstateSpeedLimit);
        ; break;

        case cityArea: 
        speedLimit = citySpeedLimit;
        speedDiff = speedLimitCheck(citySpeedLimit);
        ; break;

        case residentialArea: 
        speedLimit = residentialSpeedLimit;
        speedDiff = speedLimitCheck(residentialSpeedLimit);
        ; break;
       
    }


    if(speedDiff <= 20 ){
        status = speedingStatus;
     }
     else if(speedDiff <= 40){
         status = excessiveSpeedingStatus;
     }

     else{
        status = recklessStatus;
     }

    let result = ''; 

    if(inTheLimit){

        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
    }
    else {
        result = `The speed is ${speedDiff} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    }


    console.log(result);
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');