class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar (model, horsepower, price, mileage) {
        if (typeof model !== 'string' || model === '') {
            throw new Error('Invalid input!')
        };
        if (!Number.isInteger(horsepower)  || Number(horsepower) < 0) {
            throw new Error('Invalid input!')
        };
        if (price < 0  || mileage < 0) {
            throw new Error('Invalid input!')
        };
        if (model === undefined || horsepower === undefined || price === undefined || mileage === undefined) {
            throw new Error('Invalid input!')
        }
        let car = {
            model,
            horsepower,
            price,
            mileage,
        };
        this.availableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${Math.round((mileage + Number.EPSILON) * 100) / 100} km - ${Math.round((price + Number.EPSILON) * 100) / 100}$`
    };

    sellCar (model, desiredMileage) {
        let isModelInArray = false;
        let index;
        for (let car of this.availableCars) {
            if (car.model === model) {
                isModelInArray = true;
                index = this.availableCars.indexOf(car);
            }
        };
        if (!isModelInArray) {
            throw new Error(`${model} was not found!`)
        }

        let car = this.availableCars[index];

        if (isModelInArray) {
            if(car.mileage <= desiredMileage) {
                car.price = car.price;
            } else if (car.mileage <= desiredMileage + 40000) {
                car.price = 0.95 * car.price;
            } else {
                car.price = 0.9 * car.price;
            }
        }
        this.soldCars.push({
            model: car.model,
            horsepower: car.horsepower,
            soldPrice: car.price,
        });

        this.totalIncome += Number(car.price);
        let soldPrice = car.price;
        this.availableCars.splice(index, 1);

        return `${model} was sold for ${Math.round((soldPrice + Number.EPSILON) * 100) / 100}$`;
    }

    currentCar () {
        if(this.availableCars.length === 0) {
            return 'There are no available cars'
        }
        let firstLine = '-Available cars:';
        let result = [];
        result.push(firstLine);

        this.availableCars.forEach(x => result.push(`---${x.model} - ${x.horsepower} HP - ${Math.round((x.mileage + Number.EPSILON) * 100) / 100} km - ${Math.round((x.price + Number.EPSILON) * 100) / 100}$`));
        return result.join('\n');
    }

    salesReport (criteria) {
        if (!(criteria === 'horsepower' || criteria === 'model')) {
            return "Invalid criteria!"
        };
        let sorted;
        if (criteria === 'horsepower') {
            sorted = this.soldCars.sort((a,b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            sorted = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }
        let result = [];
    
        let firstLine = `-${this.name} has a total income of ${Math.round((this.totalIncome + Number.EPSILON) * 100) / 100}$`;
        result.push(firstLine);
        let soldCars = this.soldCars.length;
        
        let secondLine = `-${soldCars} cars sold:`;
        result.push(secondLine);

        sorted.forEach(x => result.push(`---${x.model} - ${x.horsepower} HP - ${Math.round((x.soldPrice + Number.EPSILON) * 100) / 100}$`));
        return result.join('\n');

    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000.567, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000.567);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.currentCar());
console.log(dealership.salesReport('horsepower'));





