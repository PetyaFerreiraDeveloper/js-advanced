const mathEnforcer = require('./04-math');
const { assert } = require('chai');

describe('test the object mathEnforcer', () => {
    describe('test the addFive function', ()=> {
        // tests with incorrect input
        it('Return undefined if the parameter of addFive function is not a number', () => {
            assert(mathEnforcer.addFive('2') === undefined);
            assert(mathEnforcer.addFive([]) === undefined);
            assert(mathEnforcer.addFive({}) === undefined);
            assert(mathEnforcer.addFive(undefined) === undefined);
            assert(mathEnforcer.addFive(null) === undefined);
            assert(mathEnforcer.addFive(false) === undefined);
            assert(mathEnforcer.addFive(true) === undefined);
        });
        // tests with correct input
        it('test with positive integer', () => {
            assert(mathEnforcer.addFive(3) === 8);
            assert(mathEnforcer.addFive(-3) === 2);
            assert(mathEnforcer.addFive(4.5) === 9.5);
        })
    });

    describe('test the subtractTen function', () => {
        // tests with incorrect input
        it('Return undefined if the parameter of subtractTen function is not a number', () => {
            assert(mathEnforcer.subtractTen('2') === undefined);
        });
        it('Return undefined if the parameter of subtractTen function is not a number', () => {
            assert(mathEnforcer.subtractTen({}) === undefined);
        });
        it('Return undefined if the parameter of subtractTen function is not a number', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined);
        });
        it('Return result if parameter is negative number', () => {
            assert(mathEnforcer.subtractTen(-5) === -15);
        });
        it('Return result if parameter is negative number', () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.5);
        });
        it('Return result if parameter is negative number', () => {
            assert(mathEnforcer.subtractTen(15) === 5);
        });
    });

    describe('test the sum function', () => {
        it('calculate if one of numbers is negative', () => {
            assert(mathEnforcer.sum(-2, 2) === 0);
        });
        it('calculate if one of numbers is floating point', () => {
            assert(mathEnforcer.sum(2, 2.05) === 4.05);
        });
        it('calculate two positive integers', () => {
            assert(mathEnforcer.sum(2, 2) === 4);
        });
        it('calculate if one of numbers is floating point', () => {
            assert(mathEnforcer.sum(-2, -2) === -4);
        });
        it('calculate if one of numbers is floating point', () => {
            assert(mathEnforcer.sum(-2.5, -2.5) === -5);
        });
        it('Return undefined if first parameter of sum function is not a number', () => {
            assert(mathEnforcer.sum('2', 2) === undefined);
        });
        it('Return undefined if first parameter of sum function is not a number', () => {
            assert(mathEnforcer.sum(3, '2') === undefined);
        });
        it('Return undefined if first parameter of sum function is not a number', () => {
            assert(mathEnforcer.sum(3, []) === undefined);
        });
        it('Return undefined if first parameter of sum function is not a number', () => {
            assert(mathEnforcer.sum(3, {}) === undefined);
        });
        it('Return undefined if first parameter of sum function is not a number', () => {
            assert(mathEnforcer.sum('3', []) === undefined);
        });
        it('Return undefined if first parameter of sum function is not a number', () => {
            assert(mathEnforcer.sum('3', '4') === undefined);
        });
        it('Return undefined if first parameter of sum function is not a number', () => {
            assert(mathEnforcer.sum(undefined, 7) === undefined);
        });
    });
})