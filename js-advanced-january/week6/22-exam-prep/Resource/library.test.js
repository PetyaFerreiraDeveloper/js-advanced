const library = require('./library.js');
const { assert, expect } = require('chai');

describe('library',()=>{
    describe('calcPriceOfBook', () => {
        it('invalid input - book name is not a string',() => {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw(Error, 'Invalid input');
        });

        it('invalid input - year is not a number',() => {
            expect(() => library.calcPriceOfBook('book', '1')).to.throw(Error, 'Invalid input');
        });

        it('invalid input - year is not an integer',() => {
            expect(() => library.calcPriceOfBook('book', 1.5)).to.throw(Error, 'Invalid input');
        });

        it('valid input and year is before 1980',() => {
            expect(library.calcPriceOfBook('book', 1970)).to.equal('Price of book is 10.00');
        });

        it('valid input and year is 1980',() => {
            expect(library.calcPriceOfBook('book', 1980)).to.equal('Price of book is 10.00');
        });

        it('valid input and year is after 1980',() => {
            expect(library.calcPriceOfBook('book', 1990)).to.equal('Price of book is 20.00');
        });
    })
    describe('findBook', ()=>{
        it('invalid input - empty array',()=>{
            expect(()=>library.findBook([],'book')).to.throw('No books currently available');
        });

        it('should return found book if book is inside the array',() => {
            expect(library.findBook(['troy', 'book'], 'troy')).to.equal('We found the book you want.')
        });

        it('should return book not found if book is not in the array',() => {
            expect(library.findBook(['troy', 'book'], 'JS')).to.equal('The book you are looking for is not here!')
        })
    })
    describe('arrangeTheBooks', ()=>{
        it('should throw error if input is string',()=>{
            expect(()=> library.arrangeTheBooks('wrong')).to.throw(Error, 'Invalid input')
        });

        it('should throw error if input is not an integer',()=>{
            expect(()=> library.arrangeTheBooks(5.5)).to.throw(Error, 'Invalid input')
        });

        it('should throw error if input is negative number',()=>{
            expect(()=> library.arrangeTheBooks(-5)).to.throw(Error, 'Invalid input')
        });

        it('should return insufficient place if books are more than available space',()=>{
            expect(library.arrangeTheBooks(45)).to.equal('Insufficient space, more shelves need to be purchased.')
        });

        it('should return great job if books are the same number as available spots',()=>{
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.')
        });

        it('should return great job if books are less than the available spots',()=>{
            expect(library.arrangeTheBooks(30)).to.equal('Great job, the books are arranged.')
        });

    })
    
})