const mathEnforcer = require('./04-math');
const { assert } = require('chai');

describe('mathEnforcer Object functionality', () => {
    describe('addFive function', ()=> {
        //postitive tests
        it('should return 10 if argument is 5',()=>{
            assert(mathEnforcer.addFive(5) === 10)
        });
        it('should return 0 if argument is negative -5',()=>{
            assert(mathEnforcer.addFive(-5) === 0)
        });
        it('should return the sum if argument is 5.5',()=>{
            assert(mathEnforcer.addFive(5.5) === 10.5)
        });

        //negative tests
        it('should return undefined if argument type is not a number',()=>{
            assert(mathEnforcer.addFive('5') === undefined);
            assert(mathEnforcer.addFive(null) === undefined);
            assert(mathEnforcer.addFive([]) === undefined);
            assert(mathEnforcer.addFive({}) === undefined);
            assert(mathEnforcer.addFive(true) === undefined);
            assert(mathEnforcer.addFive(undefined) === undefined);
        });
    });
    describe('subtractTen function', ()=> {
        //postitive tests
        it('should return 0 if argument is 10',()=>{
            assert(mathEnforcer.subtractTen(10) === 0)
        });
        it('should return -15 if argument is negative -5',()=>{
            assert(mathEnforcer.subtractTen(-5) === -15)
        });
        it('should return -4.5 if argument is 5.5',()=>{
            assert(mathEnforcer.subtractTen(5.5) === -4.5)
        });

        //negative tests
        it('should return undefined if argument type is not a number',()=>{
            assert(mathEnforcer.subtractTen('5') === undefined);
            assert(mathEnforcer.subtractTen(null) === undefined);
            assert(mathEnforcer.subtractTen([]) === undefined);
            assert(mathEnforcer.subtractTen({}) === undefined);
            assert(mathEnforcer.subtractTen(true) === undefined);
            assert(mathEnforcer.subtractTen(undefined) === undefined);
        });
    });
    describe('sum function', ()=> {
        //postitive tests
        it('should calculate the sum if both arguments are positive',()=>{
            assert(mathEnforcer.sum(1, 9) === 10)
        });
        it('should calculate correct if both arguments are negative',()=>{
            assert(mathEnforcer.sum(-5, -10) === -15)
        });
        it('should calculate correct if both arguments floating point numnbers',()=>{
            assert(mathEnforcer.sum(5.5, 4.5) === 10)
        });
        it('should calculate correct if one of the arguments is floating point number',()=>{
            assert(mathEnforcer.sum(5, 4.5) === 9.5)
        });
        it('should calculate correct if one of the arguments is floating point number and the other is negative',()=>{
            assert(mathEnforcer.sum(5, -4.5) === 0.5)
        });
        it('should calculate correct if one is positive and the other negative',()=>{
            assert(mathEnforcer.sum(5, -4) === 1)
        });

        //negative tests
        it('should return undefined if argument type is not a number, or if only one argument is given',()=>{
            assert(mathEnforcer.sum('5', 7) === undefined);
            assert(mathEnforcer.sum('5', 7) === undefined);
            assert(mathEnforcer.sum('7', '7') === undefined);
            assert(mathEnforcer.sum(null, 5) === undefined);
            assert(mathEnforcer.sum([], 4) === undefined);
            assert(mathEnforcer.sum(6, {}) === undefined);
            assert(mathEnforcer.sum(true) === undefined);
            assert(mathEnforcer.sum(undefined, 7) === undefined);
        });
    })
})