function solve(steps, footprint, speedKmH) {
    let distanceM = steps * footprint;
    let speedMH = speedKmH * 1000;
    let walkTimeH = distanceM / speedMH;
    let walkSec = walkTimeH * 60 * 60;
    let restSec = Math.floor(distanceM / 500) * 60;
    let totalTimeSec = walkSec + restSec;
    let hours = Math.floor(totalTimeSec / 3600).toFixed(0).padStart(2, '0');
    let min = Math.floor(totalTimeSec / 60).toFixed(0).padStart(2, '0');
    let sec = (totalTimeSec % 60).toFixed(0).padStart(2, '0');
    
    console.log(`${hours}:${min}:${sec}`);
}

solve(4000, 0.60, 5)