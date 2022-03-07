const isOddOrEven = require('./02-even-odd');
const { assert } = require('chai');

describe('Even or Odd function', ()=>{

    it('should return undefined if parameter is number', ()=> {
        assert.equal(isOddOrEven(3), undefined)
    });
    it('should return undefined if parameter is array', ()=> {
        assert.equal(isOddOrEven([2, 3, 4]), undefined)
    });
    it('should return undefined if parameter is object', ()=> {
        assert.equal(isOddOrEven({age:3}), undefined)
    });
    it('should return undefined if parameter is undefined', ()=> {
        assert.equal(isOddOrEven(undefined), undefined)
    });
    it('should return even if string length is even number', ()=> {
        assert.equal(isOddOrEven('Hi'), 'even');
    });
    it('should return even if argument is empty string', ()=> {
        assert.equal(isOddOrEven(''), 'even');
    });
    it('should return odd if argument is string with one blank space', ()=> {
        assert.equal(isOddOrEven(' '), 'odd');
    });

})