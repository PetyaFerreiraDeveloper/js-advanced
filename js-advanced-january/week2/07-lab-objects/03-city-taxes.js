function cityTaxes(name, population, treasury) {
    let town = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            percentage /= 100;
            this.population *= 1 + percentage;
        },
        applyRecession(percentage) {
            percentage /= 100;
            this.treasury *= 1 - percentage;
        }
    }

    return town;
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

