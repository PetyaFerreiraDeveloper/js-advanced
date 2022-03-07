const isOddOrEven = require('./02-even-odd');
const { assert } = require('chai');

describe('isOddOrEven function tests', () => {
    // Invalid input
    it('should return undefined if parameter is a number', () => {
        assert.equal(isOddOrEven(5), undefined);
    });
    it('should return undefined if parameter is a object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });
    it('should return undefined if parameter is a array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('should return undefined if parameter is a undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });
    it('should return undefined if parameter is null', () => {
        assert.equal(isOddOrEven(null), undefined);
    });
    // Valid input
    it('should return even if parameters length is even number', () => {
        assert.equal(isOddOrEven('days'), 'even');
    });
    it('should return odd if parameter length is odd number', () => {
        assert.equal(isOddOrEven('hello'), 'odd');
    });
})