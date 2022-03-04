const sumFunction = require ('../04-sum-numbers');
const { expect } = require('chai');


describe ('Sum of Numbers', () => {
    it('Should return the sum of the numbers in the array', ()=>{
        let numbers = [1, 2, 3, 4, 5];
        let expectedSum = 15;
        let actualSum = sumFunction(numbers);

        expect(actualSum).to.equal(expectedSum);
    });
    it('Should return the sum with negative number in the array', ()=>{
        let numbers = [1, 2, 3, 4, -5];
        let expectedSum = 5;
        let actualSum = sumFunction(numbers);

        expect(actualSum).to.equal(expectedSum);
    });
    it('Should return 0 when only zeroes are given in the array', ()=>{
        let numbers = [0,0,0];
        let expectedSum = 0;
        let actualSum = sumFunction(numbers);

        expect(actualSum).to.equal(expectedSum);
    });
    it('Should calculate sum when numbers as strings are given in the array', ()=>{
        let numbers = ['1','2'];
        let expectedSum = 3;
        let actualSum = sumFunction(numbers);

        expect(actualSum).to.equal(3);
    });
    it('Should return NaN if array elements can not be parsed to number', ()=>{
        let numbers = ['a','1'];
        let expectedSum = NaN;
        let actualSum = sumFunction(numbers);

        expect(actualSum).to.be.NaN;
    });

    it('Should return 0 if an empty array is provided', ()=>{
        let numbers = [];
        let expectedSum = 0;
        let actualSum = sumFunction(numbers);

        expect(actualSum).to.equal(0);
    });

})