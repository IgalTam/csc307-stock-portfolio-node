const express = require('express');
const app = express();

app.use(express.json())


exports.initPortfolio = function initPortfolio () {
    return new Portfolio();
}

class Portfolio {
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
        const tickerObj = {"tickerName": tickerName, "tickerCount": shares};
        this.portfl_lst.push(tickerObj);
        if(tickerObj.tickerCount === 0)
            this.clearEmptyTicker(tickerObj);
    }

    makePurchase(tickername, shares) {
        if(tickername === undefined) {
            this.addTicker(tickername, shares);
        }
        else
            this.getTicker(tickername).tickerCount += shares;
    }

    makeSale(tickername, shares) {
        if(this.checkTicker(tickername) === false)
            throw new Error("UndefinedTickerException");
        else {
            const tickerObj = this.getTicker(tickername);
            if(tickerObj.tickerCount < shares)
                throw new Error("ShareSaleException");
            tickerObj.tickerCount -= shares;
            if(tickerObj.tickerCount === 0)
                this.clearEmptyTicker(tickerObj);
        }
    }

    getTicker(tickerName) {
        return this.portfl_lst.find(element => element.tickerName === tickerName);
    }

    getShares(tickerName) {
        return this.portfl_lst.find(element => element.tickerName === tickerName).tickerCount;
    }

    checkTicker(tickerName) {
        if(this.portfl_lst.find(element => element.tickerName === tickerName) === undefined)
            return false;
        return true;
    }

    clearEmptyTicker(tickerObj) {
        this.portfl_lst.splice(this.portfl_lst.indexOf(tickerObj), 1);
    }
}