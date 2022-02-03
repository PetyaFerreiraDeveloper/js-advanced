const lookupChar = require("./03-char-lookup");
const { assert } = require("chai");

describe("test the charLookUp function", () => {
    it("return char at index", () => {
        assert(lookupChar("hey", 1) === "e");
    });
    it("return incorrect index if index > string.length", () => {
        assert(lookupChar("hey", 4) === "Incorrect index");
    });
    it("return incorrect index if index < 0", () => {
        assert(lookupChar("hey", -4) === "Incorrect index");
    });
    it("return undefined if index is not an integer", () => {
        assert(lookupChar("hey", 4.5) === undefined);
    });
    it("return undefined if first parameter is not a string", () => {
        assert(lookupChar([], 4) === undefined);
    });
});
