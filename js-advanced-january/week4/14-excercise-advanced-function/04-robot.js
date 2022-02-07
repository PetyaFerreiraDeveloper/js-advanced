function solution() {
    let apple = {
        carbohydrate: 1,
        flavour: 2,
    }
    let lemonade = {
        carbohydrate: 10,
        flavour: 20,
    }
    let burger = {
        carbohydrate: 5,
        fat: 7,
        flavour: 3,
    }
    let eggs = {
        protein: 5,
        fat: 1,
        flavour: 1,
    }
    let turkey = {
        protein: 10,
        carbohydrate: 10,
        fat: 10,
        flavour: 10,
    }
}

let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));
