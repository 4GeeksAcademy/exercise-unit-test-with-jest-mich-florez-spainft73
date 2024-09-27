const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app');

test('sumar 7 + 3 debería dar 10', () => {
    expect(sum(7, 3)).toBe(10);
});

test('convierte 100 euros a dólares', () => {
    expect(fromEuroToDollar(100)).toBeCloseTo(107); // Tasa de conversión de 1.07
});

test('convierte 100 dólares a yenes', () => {
    expect(fromDollarToYen(100)).toBeCloseTo(14626.17); // Conversión dólar a yen
});

test('convierte 10,000 yenes a libras', () => {
    expect(fromYenToPound(10000)).toBeCloseTo(55.61, 1); // Cambia la precisión a 1 decimal
});
