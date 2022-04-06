const rentCar = require('./re-exam.js');
const { expect } = require('chai');

describe('rent a car', () => {
    describe('search Car', () => {
        it('should throw error if shop is a string', ()=>{
            expect(()=>rentCar.searchCar('str','bmw')).to.throw(Error, 'Invalid input!')
        });
        it('should throw error if shop is undefined', ()=>{
            expect(()=>rentCar.searchCar(undefined,'bmw')).to.throw(Error, 'Invalid input!')
        });
        it('should throw error if shop is number', ()=>{
            expect(()=>rentCar.searchCar(1,'bmw')).to.throw(Error, 'Invalid input!')
        });
        it('should throw error if shop is boolean', ()=>{
            expect(()=>rentCar.searchCar(false,'bmw')).to.throw(Error, 'Invalid input!')
        });
        it('should throw error if shop is an object', ()=>{
            expect(()=>rentCar.searchCar({},'bmw')).to.throw(Error, 'Invalid input!')
        });
        it('should throw error if model is a number', ()=>{
            expect(()=>rentCar.searchCar(['str'],5)).to.throw(Error, 'Invalid input!')
        });
        it('should throw error if model is a boolean', ()=>{
            expect(()=>rentCar.searchCar(['str'],false)).to.throw(Error, 'Invalid input!')
        });
        it('should throw error if model is undefiend', ()=>{
            expect(()=>rentCar.searchCar(['str'],undefined)).to.throw(Error, 'Invalid input!')
        });
        it('should throw error if model is an array', ()=>{
            expect(()=>rentCar.searchCar(['str'],[])).to.throw(Error, 'Invalid input!')
        });it('should throw error if model is an object', ()=>{
            expect(()=>rentCar.searchCar(['str'],{})).to.throw(Error, 'Invalid input!')
        });


        it('should throw error if shop is empty array', ()=>{
            expect(()=>rentCar.searchCar([],'bmw')).to.throw(Error, 'There are no such models in the catalog!')
        });
        it('should throw error if shop does not include the model', ()=>{
            expect(()=>rentCar.searchCar(['lada', 'trabant'],'bmw')).to.throw(Error, 'There are no such models in the catalog!')
        });

        it('return number of models and model type if it exists in shop', ()=>{
            expect(rentCar.searchCar(['bmw','bmw','lada'],'bmw')).to.equal('There is 2 car of model bmw in the catalog!');
            expect(rentCar.searchCar(['bmw','lada'],'bmw')).to.equal('There is 1 car of model bmw in the catalog!')
        });

    });

    describe('calculate price of car', ()=> {
        it('should throw error if model is not a string', ()=>{
            expect(()=>rentCar.calculatePriceOfCar(5,'bmw')).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar(undefined,'bmw')).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar(false,'bmw')).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar([],'bmw')).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar({},'bmw')).to.throw(Error, 'Invalid input!');
        });

        it('should throw error if days is not an integer', ()=>{
            expect(()=>rentCar.calculatePriceOfCar('bmw', 5.5)).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar('bmw', undefined)).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar('bmw', true)).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar('bmw', [])).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar('bmw', {})).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar('bmw', '3')).to.throw(Error, 'Invalid input!');
            
        });

        it('should throw error if model does not exist in catalog', ()=>{
            expect(()=>rentCar.calculatePriceOfCar('bmw', -3)).to.throw(Error, 'No such model in the catalog!');
            expect(()=>rentCar.calculatePriceOfCar('xxx', 3)).to.throw(Error, 'No such model in the catalog!');
        });

        it('should calculate price of car', ()=>{
            expect(rentCar.calculatePriceOfCar('Audi', 1)).to.equal('You choose Audi and it will cost $36!')
            expect(rentCar.calculatePriceOfCar('Audi', 0)).to.equal('You choose Audi and it will cost $0!')
            expect(rentCar.calculatePriceOfCar('Audi', 2)).to.equal('You choose Audi and it will cost $72!')
        })
    });

    describe('checkBudget', ()=> {
        it('should throw error if input is not a number', ()=>{
            expect(()=>rentCar.checkBudget(5,'bmw',5)).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.checkBudget(5,'bmw','5')).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.checkBudget('5','bmw','5')).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.checkBudget('5',5,'5')).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.checkBudget(5, 5,'5')).to.throw(Error, 'Invalid input!');
            expect(()=>rentCar.checkBudget('5', 5, 5)).to.throw(Error, 'Invalid input!');
        });

        it('should return need bigger budget if budget is not enough', () => {
            expect(rentCar.checkBudget(5, 5, 20)).to.equal('You need a bigger budget!');
        })

        it('should return rent a car if budget is enough', () => {
            expect(rentCar.checkBudget(5, 5, 25)).to.equal('You rent a car!');
        })
        it('should return rent a car if budget is enough', () => {
            expect(rentCar.checkBudget(5, 5, 30)).to.equal('You rent a car!');
        })
    })
    
})