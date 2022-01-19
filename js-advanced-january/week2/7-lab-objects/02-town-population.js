function solve(arr) {
    let towns = {};
    for (let el of arr) {
        let [name, population] = el.split(' <-> ');
        if (towns.hasOwnProperty(name)) {
            towns[name] += population;
        } else {
            towns[name] = population;
        }
    }
    for (let town in towns) {
        console.log(`${town}: ${towns[town]}`);
    }
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)