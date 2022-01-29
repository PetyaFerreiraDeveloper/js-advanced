function solve(spe, area) {
    let speed = Number(spe);
    let status = "";
    switch (area) {
        case "motorway":
            let motorway = 130;
            if (speed <= motorway) {
                console.log(`Driving ${speed} km/h in a ${motorway} zone`);
            } else {
                let over = speed - motorway;
                if (over > 40) {
                    status = "reckless driving";
                } else if (over > 20) {
                    status = "excessive speeding";
                } else {
                    status = "speeding";
                }
                console.log(
                    `The speed is ${over} km/h faster than the allowed speed of ${motorway} - ${status}`
                );
            }
            break;
        case "interstate":
            let interstate = 90;
            if (speed <= interstate) {
                console.log(`Driving ${speed} km/h in a ${interstate} zone`);
            } else {
                let over = speed - interstate;
                if (over > 40) {
                    status = "reckless driving";
                } else if (over > 20) {
                    status = "excessive speeding";
                } else {
                    status = "speeding";
                }
                console.log(
                    `The speed is ${over} km/h faster than the allowed speed of ${interstate} - ${status}`
                );
            }
            break;
        case "city":
            let city = 50;
            if (speed <= city) {
                console.log(`Driving ${speed} km/h in a ${city} zone`);
            } else {
                let over = speed - city;
                if (over > 40) {
                    status = "reckless driving";
                } else if (over > 20) {
                    status = "excessive speeding";
                } else {
                    status = "speeding";
                }
                console.log(
                    `The speed is ${over} km/h faster than the allowed speed of ${city} - ${status}`
                );
            }
            break;
        case "residential":
            let residential = 20;
            if (speed <= residential) {
                console.log(`Driving ${speed} km/h in a ${residential} zone`);
            } else {
                let over = speed - residential;
                if (over > 40) {
                    status = "reckless driving";
                } else if (over > 20) {
                    status = "excessive speeding";
                } else {
                    status = "speeding";
                }
                console.log(
                    `The speed is ${over} km/h faster than the allowed speed of ${residential} - ${status}`
                );
            }
            break;
    }
}

solve(200, "motorway");
