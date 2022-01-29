function solve(arr) {
    let towns = {};
    for (let el of arr) {
        let [name, population] = el.split(' <-> ');
        if (towns.hasOwnProperty(name)) {
            towns[name] += Number(population);
        } else {
            towns[name] = Number(population);
        }
    }
    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)