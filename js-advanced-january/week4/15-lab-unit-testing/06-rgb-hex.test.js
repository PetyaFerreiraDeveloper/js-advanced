let expect = require('chai').expect;
let rgbToHexColor = require('./06-rgb-hex');

describe('RGB-Hex function', ()=>{
    it('should return the hex code for the rgb color input arguments',()=>{
        expect(rgbToHexColor(255, 10, 15)).to.equal('#FF0A0F')
    });

    it('should return the hex code for the rgb color input arguments',()=>{
        expect(rgbToHexColor(25, 10, 15)).to.equal('#190A0F')
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    });

    it('should return undefined if input number is ouside of 0-255 range',()=>{

        expect(rgbToHexColor(256, 10, 15)).to.be.undefined;
        expect(rgbToHexColor(254, 1000, 15)).to.be.undefined;
        expect(rgbToHexColor(254, 10, -15)).to.be.undefined;
    });

    it('should return undefined if input element is not a number',()=>{
        expect(rgbToHexColor('256', 10, 15)).to.be.undefined;
        expect(rgbToHexColor('256', '10', '15')).to.be.undefined;
        expect(rgbToHexColor([], 1000, 15)).to.be.undefined;
        expect(rgbToHexColor(254, false, -15)).to.be.undefined;
        expect(rgbToHexColor(254, 10, -15)).to.be.undefined;
    });

    it('should return undefined if one or more argument is missing',()=>{
        expect(rgbToHexColor(10, 15)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
        expect(rgbToHexColor(254)).to.be.undefined;
    });
})