const express = require('express');
const app = express();

app.use(express.json())


exports.initPortfolio = function initPortfolio () {
    return new portfolio();
}

class portfolio {
    portfl_lst;
    constructor() {
        this.portfl_lst = [];
    }

    isEmpty() {
        if(this.portfl_lst.length === 0)
            return true;
        return false;
    }

    tickerCount() {
        return this.portfl_lst.length;
    }

    addTicker(tickerName, shares) {
        this.portfl_lst.push({"tickerName": tickerName, "tickerCount": shares});
    }

    makePurchase(tickername, shares) {
        if(tickername === undefined)
            this.addTicker(tickername, tickerCount);
        else
            this.getTicker(tickername).tickerCount += shares;
    }

    makeSale(tickername, shares) {
        if(tickername === undefined)
            this.addTicker(tickername, tickerCount);
        else
            this.getTicker(tickername).tickerCount -= shares;
    }

    getTicker(tickerName) {
        return this.portfl_lst.find(element => element.tickerName === tickerName);
    }

    getShares(tickerName) {
        return this.portfl_lst.find(element => element.tickerName === tickerName).tickerCount;
    }
}