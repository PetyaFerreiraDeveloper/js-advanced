function solve(arr) {
    let heroArr = [];
    
    while (arr.length > 0) {
        let line = arr.shift().split(' / ');
        let [name, level, items] = line;
        items = items ? items.split(', ') : [];
        let hero = {name, level : Number(level), items};
        heroArr.push(hero);
    }
    
    return JSON.stringify(heroArr)
}

let final = solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)

console.log(final);