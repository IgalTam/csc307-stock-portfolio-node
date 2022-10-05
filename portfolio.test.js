const myFunctions = require('./portfolio.js');

beforeEach(() => {
    portfol = myFunctions.initPortfolio();
});

test('Empty portfolio', () => {
    expect(portfol.length === 0).toBeFalsy();
});