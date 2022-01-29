function objDemo() {

    let doubleChocko = {
        flourType: 'brown',
        bonus: 'fruit',
        weight: 100,
    };
    // console.log(doubleChocko.weight);
    // console.log(doubleChocko['bonus']);

    doubleChocko.flourType = 'white';
    doubleChocko.count = 5;
    doubleChocko['taste'] = 'sweet';

    // to delete
    // delete doubleChocko.bonus;

    // copying an object
    let copy = JSON.parse(JSON.stringify(doubleChocko));

    doubleChocko.count = 10;

    //console.log(doubleChocko);
    //console.log(copy);

    // Object as associative array

    for (let el in doubleChocko) {
        // console.log(el);
        // console.log(doubleChocko[el]);
    }

    // itteration through object
    let keys = Object.keys(doubleChocko);
    // console.log(keys);

    let values = Object.values(doubleChocko);
    // console.log(values);

    // we can use entries for sorting - we can access each element of the two arrays
    let entries = Object.entries(doubleChocko);
    // console.log(entries);
    // console.log(entries[0]);
    // console.log(entries[0][0]);

    let car = {
        brand: 'Mercedes',
        model: 'S-500',
        age: 5,
        maxSpeed: 300,
        horsePowers: 300,
        move: function() {
            return this.maxSpeed * this.horsePowers;
        },
        name: 'Asen',
    }
    //console.log(car.move());
    //console.log(car.name);

    let firstName = 'Sali';
    let lastName = 'Hari';

    let cat = {
        firstName,
        lastName
    }
    console.log(cat);

    //JSON
    let testObj = JSON.parse(data);
    let secondTest = JSON.stringify(testObj);

}

objDemo()