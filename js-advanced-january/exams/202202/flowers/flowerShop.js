const flowerShop = {
    calcPriceOfFlowers(flower, price, quantity) {
        if (typeof flower != 'string' || !Number.isInteger(price) || !Number.isInteger(quantity)) {
            throw new Error('Invalid input!');
        } else {
            let result = price * quantity;
            return `You need $${result.toFixed(2)} to buy ${flower}!`;
        }
    },
    checkFlowersAvailable(flower, gardenArr) {
        if (gardenArr.indexOf(flower) >= 0) {
            return `The ${flower} are available!`;
        } else {
            return `The ${flower} are sold! You need to purchase more!`;
        }
    },
    sellFlowers(gardenArr, space) {
        let shop = [];
        let i = 0;
        if (!Array.isArray(gardenArr) || !Number.isInteger(space) || space < 0 || space >= gardenArr.length) {
            throw new Error('Invalid input!');
        } else {
            while (gardenArr.length > i) {
                if (i != space) {
                    shop.push(gardenArr[i]);
                }
                i++
            }
        }
        return shop.join(' / ');
    }
}

describe("Tests for Flower Shop object", function() {
    
    describe("Test calcPriceOfFlowers", function() {
        it("Test with valid imputs", function() {
            assert.equal(flowerShop.calcPriceOfFlowers('daisy', 20, 10), 200)
        });
        it("Test with invalid imputs", function() {
            expect(flowerShop.calcPriceOfFlowers(20, 'daisy', 10)).to.throw(()=> {"Invalid input!"})
        });
        it("Test with invalid imputs 2", function() {
            expect(flowerShop.calcPriceOfFlowers(20, 'daisy', '10')).to.throw(()=> {"Invalid input!"})
        });
        it("Test with invalid imputs 3", function() {
            expect(flowerShop.calcPriceOfFlowers(20, 'daisy', '10')).to.throw(()=> {"Invalid input!"})
        });
     });
     describe("Test checkFlowersAvailable", function() {
        it("Test with valid flower", function() {
            assert.equal(flowerShop.checkFlowersAvailable('Rose',["Rose", "Lily", "Orchid"]), "The Rose are available!")
        });
        it("Test with invalid flower", function() {
            assert.equal(flowerShop.checkFlowersAvailable('daisy', ["Rose", "Lily", "Orchid"]), "The daisy are sold! You need to purchase more!")
        });
     });
     describe("Test sellFlowers", function() {
        it("Test with valid imputs", function() {
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0), "Lily/Orchid")
        });
        it("Test with invalid imputs", function() {
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 5), "Invalid input!")
        });
     });
});

