const sum = (a, b) => {
    return a + b;
};


console.log(sum(7, 3));



let oneEuroIs = {
    "JPY": 156.5, // Japanese Yen
    "USD": 1.07,  // US Dollar
    "GBP": 0.87,  // British Pound
};


function fromDollarToYen(dollarAmount) {
    let euros = dollarAmount / oneEuroIs.USD; 
}


function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs.USD;
}


function fromYenToPound(yenAmount) {
    let euros = yenAmount / oneEuroIs.JPY; 
    return euros * oneEuroIs.GBP; 
}


module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};


console.log(fromEuroToDollar(100));