const cinema = require('./cinema.js');
const { expect } = require('chai');

describe('cinema functionaility',()=>{
    describe('showMovies', ()=> {
        it('should return no movies, if there are no movies in the array', ()=> {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        })
        it('should return list of movies', ()=> {
            expect(cinema.showMovies(['hey','hop'])).to.equal('hey, hop');
        })
    });

    describe('ticket Price', () => {
        it('should return the price of projection, if type is correct', ()=> {
            expect(cinema.ticketPrice("Premiere")).to.equal(12.00);
            expect(cinema.ticketPrice("Normal")).to.equal(7.50);
            expect(cinema.ticketPrice("Discount")).to.equal(5.50);
        });
        it('should throw an error if type is incorrect', ()=>{
            expect(()=>{cinema.ticketPrice('test').to.throw(Error, 'Invalid projection type.')})
        })
    });
    
    describe('Swap Seats', ()=> {
        it('Should return unsuccessful with incorrect input - seats are not a number', ()=> {
            expect(cinema.swapSeatsInHall('2.5', 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, '3.5')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(undefined, 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, undefined)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(true, 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, true)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Should return unsuccessful with incorrect input - seats are a negative number', ()=> {
            expect(cinema.swapSeatsInHall(-2, 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, -3)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Should return unsuccessful with incorrect input - seats are not an integer number', ()=> {
            expect(cinema.swapSeatsInHall(2.5, 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 3.5)).to.equal('Unsuccessful change of seats in the hall.');
        });
        
        it('Should return unsuccessful with incorrect input - seats are higher than 20', ()=> {
            expect(cinema.swapSeatsInHall(25, 3)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 35)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Should return unsuccessful with incorrect input - seats are equal 0', ()=> {
            expect(cinema.swapSeatsInHall(25, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 35)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Should return unsuccessful with incorrect input - seats are equal numbers', ()=> {
            expect(cinema.swapSeatsInHall(5, 5)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('Should return unsuccessful with incorrect input - seats are equal numbers', ()=> {
            expect(cinema.swapSeatsInHall(5, 5)).to.equal('Unsuccessful change of seats in the hall.');
        });
    })
})
