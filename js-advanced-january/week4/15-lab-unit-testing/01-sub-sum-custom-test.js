

const solve = require("./01-sub-sum");

function test() {
    //Arrange
    let expectedSum = 150;
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;

    // Act
    let actualSum = solve(numbers, startIndex, endIndex);

    // Assert

    if (actualSum == expextedSum) {
        console.log("correct");
    } else {
        console.log("error");
    }
}
test();

// code that checks weather certain functionality works as expected
// allows developers to see where and why errors occur
