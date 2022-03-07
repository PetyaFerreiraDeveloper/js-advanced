const lookupChar = require('./03-char-lookup');
const { assert } = require('chai');

describe('lookupChar function', ()=>{
    it('should return undefined if first argument is a number',()=>{
        assert.equal(lookupChar(3, 3), undefined);
    });
    it('should return undefined if first argument is an array',()=>{
        assert.equal(lookupChar([4], 3), undefined);
    });
    it('should return undefined if first argument is an object',()=>{
        assert.equal(lookupChar({}, 3), undefined);
    });
    it('should return undefined if first argument is undefined',()=>{
        assert.equal(lookupChar(undefined, 3), undefined);
    });
    it('should return undefined if second argument is not an integer',()=>{
        assert.equal(lookupChar('hey', 'k'), undefined);
    });
    it('should return undefined if second argument is not an integer',()=>{
        assert.equal(lookupChar('hey', 3.5), undefined);
    });
    it('should return undefined if second argument if first argument is not a string and second argument is not an integer',()=>{
        assert.equal(lookupChar(true, 'k'), undefined);
    });

    it('should return incorrect index if first argument is empty string and second argument is a number',()=>{
        assert.equal(lookupChar('', 3), 'Incorrect index');
    });
    it('should return incorrect index if second argument is less than 0',()=>{
        assert.equal(lookupChar('hey', -3), 'Incorrect index');
    });
    it('should return incorrect index if stringth length is less than index',()=>{
        assert.equal(lookupChar('hey', 3), 'Incorrect index');
    });
    it('should return the character if the index is correct',()=>{
        assert.equal(lookupChar('hey', 2), 'y');
    });
    it('should return incorrect index if empty string and index is 0',()=>{
        assert.equal(lookupChar('', 0), 'Incorrect index');
    });
})