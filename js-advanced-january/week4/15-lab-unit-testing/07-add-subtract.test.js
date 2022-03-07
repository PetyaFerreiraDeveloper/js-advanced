const createCalculator = require('./07-add-subtract');
const expect = require('chai').expect;

describe('calculator',()=>{
    it('should return an object', ()=>{
        expect(createCalculator()).to.be.an('object');
    });
    it('should return an object with has add function', ()=>{
        expect(createCalculator()).to.be.an('object');
    })

})

// describe('createCalculator funtion test', () =>{
 
//     it('should return an object with 3 keys - add, subtract, get', ()=>{
//         expect(createCalculator()).to.be.an('object').that.has.keys('add', 'subtract', 'get')
//     })
//     it('should return an object with 3 functions - add, subtract, get', ()=>{
//         expect(createCalculator().add).to.be.a('function')
//     })
//     it('should return an object with 3 functions - add, subtract, get', ()=>{
//         expect(createCalculator().subtract).to.be.a('function')
//     })
//     it('should return an object with 3 functions - add, subtract, get', ()=>{
//         expect(createCalculator().get).to.be.a('function')
//     })
//     it('should return 0 when only the get functions is called', ()=>{
//         expect(createCalculator().get()).to.equal(0)
//     })
//     it('should increase the value when add is called', ()=>{
//         let actual = createCalculator()
//         actual.add(15)
//         expect(actual.get()).to.equal(15)
//     })
//     it('should decrease the value when add is called', ()=>{
//         let actual = createCalculator()
//         actual.subtract(5)
//         expect(actual.get()).to.equal(-5)
//     })
//     it('should throw a type error when the subtract function accept not a digit', ()=>{
//         let actual = () => {createCalculator.subtract('aBc')};
//         expect(actual).to.throw(TypeError);
//     })
//     it('should throw a type error when the add function accept not a digit', ()=>{
//         let actual = () => {createCalculator.add('aBc')};
//         expect(actual).to.throw(TypeError);
//     })
 
//     it('should work correctly when add function accept number as a string', ()=>{
//         let actual = createCalculator()
//         actual.add('10')
//         expect(actual.get()).to.equal(10)
//     })
//     it('should work correctly when subtract function accept number as a string', ()=>{
//         let actual = createCalculator()
//         actual.subtract('10')
//         expect(actual.get()).to.equal(-10)
//     })
 
//     it('should work correctly when multiple functions are called one after another', ()=>{
//         let actual = createCalculator()
//         actual.add(50)
//         actual.subtract(15)
//         expect(actual.get()).to.equal(35)
//     })
// })