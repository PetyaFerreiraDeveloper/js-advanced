function solve(fruit, weight, price) {
    let weightKg = weight / 1000;
    let totalPrice = weightKg * price;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}

solve('apple', 1563, 2.35)