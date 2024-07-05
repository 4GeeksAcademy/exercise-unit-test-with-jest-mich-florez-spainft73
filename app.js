const { Console, log } = require("console");

// This is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7, 3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };

// We declare the function with the exact name "fromEuroToDollar"


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollarAmount) {
    let euros = dollarAmount / oneEuroIs.USD
    return euros * oneEuroIs.JPY
}

function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs.USD;
}


function fromYenToPound(yenAmount) {
    let euros = yenAmount / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}

module.exports = {
    sum, fromEuroToDollar,
    fromDollarToYen, fromYenToPound
}

console.log(fromEuroToDollar(100));
