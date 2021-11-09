const romanNumeralEncoder = require("./index")

describe('romanNumeralEncoder()', () => {
    it('should return a string', () => {
        const actualOutput = romanNumeralEncoder(1)

        expect(typeof actualOutput).toBe("string")
    });
    it('should return a string "I" when passed number 1', () => {
        const expectedOutput = "I"
        const actualOutput = romanNumeralEncoder(1)

        expect(actualOutput).toBe(expectedOutput)
    });
    it('should return a string "II" when passed number 2', () => {
        const expectedOutput = "II"
        const actualOutput = romanNumeralEncoder(2)

        expect(actualOutput).toBe(expectedOutput)
    });
    it('should return a string "III" when passed number 3', () => {
        const expectedOutput = "III"
        const actualOutput = romanNumeralEncoder(3)

        expect(actualOutput).toBe(expectedOutput)
    });
    it('should return a string "X" when passed number 10', () => {
        const expectedOutput = "X"
        const actualOutput = romanNumeralEncoder(10)

        expect(actualOutput).toBe(expectedOutput)
    });
    it('should return a string "XVII" when passed number 17', () => {
        const expectedOutput = "XVII"
        const actualOutput = romanNumeralEncoder(17)

        expect(actualOutput).toBe(expectedOutput)
    });
    it('should return a string "LX" when passed number 60', () => {
        const expectedOutput = "LX"
        const actualOutput = romanNumeralEncoder(60)

        expect(actualOutput).toBe(expectedOutput)
    });
    it('should return a string "LXXV" when passed number 75', () => {
        const expectedOutput = "LXXV"
        const actualOutput = romanNumeralEncoder(75)

        expect(actualOutput).toBe(expectedOutput)
    });
    it('should return a string "XCI" when passed number 90', () => {
        const expectedOutput = "XCI"
        const actualOutput = romanNumeralEncoder(91)

        expect(actualOutput).toBe(expectedOutput)
    });
    it('should return a string "IV" when passed number 4', () => {
        const expectedOutput = "IV"
        const actualOutput = romanNumeralEncoder(4)

        expect(actualOutput).toBe(expectedOutput)
    });
    it('should return a string "XCVIII" when passed number 98', () => {
        const expectedOutput = "XCVIII"
        const actualOutput = romanNumeralEncoder(98)

        expect(actualOutput).toBe(expectedOutput)
    });
    it('should return "Input is not a number" when given a non number', () => {
        const expectedOutput = "Input is not a number"
        const actualOutput = romanNumeralEncoder("hello")

        expect(actualOutput).toBe(expectedOutput)
    });
});