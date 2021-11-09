const romanNumeralEncoder = (num) => {
    const lookup = { "C": 100, "XC": 90, "L": 50, "XL": 40, "X" : 10, "IX": 9, "V" : 5, "IV": 4, "I" : 1}
    let str = ""
if(typeof num !== "number"){
    return "Input is not a number";
}
    for(let letter in lookup){
        while(num >= lookup[letter]) {
            str += letter
            num -= lookup[letter]
        }
    }
    return str;
    
}

module.exports = romanNumeralEncoder