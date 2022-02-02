const expect = require('chai').expect;
const sum = require('./04-sum-numbers');

describe('Sum of Numbers', () => {
    it('Should return the sum of the numbers in the array', () => {
        let numbers = [1, 2, 3, 4, 5];
        let expextedSum = 15;
        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expextedSum);

    }) 
})