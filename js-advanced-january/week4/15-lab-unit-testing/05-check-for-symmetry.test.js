const expect = require('chai').expect;
const isSymmetric = require ('./05-check-for-symmetry');

describe ('Check if array is symmetric', () => {
    it ('Should return true if a symmetric array is an argument', ()=>{
        let arr = [1, 2, 1];
        let expectedResult = true;
        let actualResult = isSymmetric(arr);

        expect(actualResult).to.equal(expectedResult);
    });

    it ('Should return true if array has only one element', ()=>{
        let arr = [1];
        let expectedResult = true;
        let actualResult = isSymmetric(arr);

        expect(actualResult).to.equal(expectedResult);
    });

    it ('Should return true if array is empty', ()=>{
        let arr = [];
        let expectedResult = true;
        let actualResult = isSymmetric(arr);

        expect(actualResult).to.equal(expectedResult);
    });

    it ('Should return false if argument is not an array', ()=>{
        expect(isSymmetric('5')).to.be.false;
        expect(isSymmetric(5)).to.be.false;
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric(NaN)).to.be.false;
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric(null)).to.be.false;
        expect(isSymmetric(true)).to.be.false;
    });

    it ('Should return false if array is not symmetric', ()=>{
        let arr = [1, 2, 2];
        let expectedResult = false;
        let actualResult = isSymmetric(arr);

        expect(actualResult).to.equal(expectedResult);
    });

    it ('Should return false if array is not symmetric with negative num', ()=>{
        let arr = [1, 2, -2];
        let expectedResult = false;
        let actualResult = isSymmetric(arr);

        expect(actualResult).to.equal(expectedResult);
    });

    it ('Should return true if array is symmetric with negative num', ()=>{
        let arr = [-2, 2, -2];
        let expectedResult = true;
        let actualResult = isSymmetric(arr);

        expect(actualResult).to.equal(expectedResult);
    });

    it ('Should return true if symmetric array of strings is given', ()=>{
        let arr = ['3', '2', '3'];
        let expectedResult = true;
        let actualResult = isSymmetric(arr);

        expect(actualResult).to.equal(expectedResult);
    });

    it ('Should return false if asymmetric array of strings is given', ()=>{
        let arr = ['7', '2', '3'];
        let expectedResult = true;
        let actualResult = isSymmetric(arr);

        expect(isSymmetric(['7', '3', '2'])).to.be.false;
    });


})