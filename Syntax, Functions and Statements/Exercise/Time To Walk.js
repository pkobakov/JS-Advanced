function timeToWalk(steps, footprint, speed){
   
    let distance = steps * footprint;
    let speedMetersInSec = speed / 3.6;
    let time = distance/speedMetersInSec;
    
    let res = Math.floor(distance/500);

    let timeInMin = Math.floor(time/60);
    let timeInSec = Math.ceil(time - (timeInMin*60));
    let timeInHours= Math.floor(time / 3600);
    timeInMin += res;

    timeInHours += Math.floor(timeInMin/60);
    timeInMin = timeInMin % 60;

    let formattedH = timeInHours < 10 ? `0${timeInHours}`:`${timeInHours}`;
    let formattedM = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let formattedS = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;


    console.log(`${formattedH}:${formattedM}:${formattedS}`);

}

timeToWalk(2564, 0.70, 5.5);