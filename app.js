const sum = (a, b) => {
    return a + b;
};
let oneEuroIs = {
    "JPY": 156.5,  
    "USD": 1.07,  
    "GBP": 0.87   
};


function fromDollarToYen(dollarAmount) {
    let euros = dollarAmount / oneEuroIs.USD; // Convierte dólares a euros
    let yen = euros * oneEuroIs.JPY;          // Convierte euros a yenes
    return yen;
}


function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs.USD; // Convierte euros a dólares
}


function fromYenToPound(yenAmount) {
    let euros = yenAmount / oneEuroIs.JPY; // Convierte yenes a euros
    return euros * oneEuroIs.GBP;          // Convierte euros a libras
}

module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};