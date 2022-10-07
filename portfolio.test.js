const myFunctions = require('./portfolio.js');

beforeEach(() => {
    portfol = myFunctions.initPortfolio();
});

test('Empty portfolio', () => {
    expect(portfol.portfl_lst.length === 0).toBeTruthy();
});

test('Empty portfolio responds', () => {
    expect(portfol.isEmpty()).toBeTruthy();
});

test('Get ticker count', () => {
    const target = 2;
    portfol.addTicker("GME", 5);
    portfol.addTicker("RBLX", 10);
    const result = portfol.tickerCount();
    expect(target).toBe(result);
});

test('Make purchase', () => {
    const target = 7;
    portfol.addTicker("GME", 5);
    portfol.makePurchase("GME", 2);
    const result = portfol.getTicker("GME").tickerCount;
    expect(target).toBe(result);
});

test('Make sale', () => {
    const target = 3;
    portfol.addTicker("GME", 5);
    portfol.makeSale("GME", 2);
    const result = portfol.getTicker("GME").tickerCount;
    expect(target).toBe(result);
});

test('Declare shares', () => {
    const target = 5;
    portfol.addTicker("GME", 5);
    const result = portfol.getShares("GME");
    expect(target).toBe(result);
});