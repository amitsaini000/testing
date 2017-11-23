tradingEngine = (function(win) {
    //sellall buyatcurrentprice stopallbids 
    var config = {
        dayHigh: 9000,
        dayLow: 10,
        profitMargin: 300,
        lossMargin: 10000,
        maxBookRate: 600000,
        minBookRate: 10,
        bookingAmount: -1,
        netProfit: 0,
        netLoss: 0,
        bidProfit: 0,
        bidLoss: 0,
        totalBids: 100,
        currentBid: 1,
        startNextBiddingInterval: 10000,
        intervalID: "",
        minProfitMargin: "",
        lossSellMargin: "",
        previousRate: "",
        currentBuyPrice: "",
        currentSellPrice: ""
    };
    var exchange = {
        koinx: {

            bitcoinCash: {
                getPrice: function() {
                    var askPrice = document.getElementsByClassName("balance")[1].innerHTML;
                    askPrice = askPrice.split(":")[1].replace(/,/g, "");
                    askPrice = parseInt(askPrice);
                    var bidPrice = document.getElementsByClassName("balance")[3].innerHTML;
                    bidPrice = bidPrice.split(":")[1].replace(/,/g, "");
                    bidPrice = parseInt(bidPrice);
                    return {
                        lowest_ask: askPrice,
                        highest_bid: bidPrice
                    }

                },
                buy: function(price, bid) {
                    var input = $('input');
                    input[0].value = price;
                    input[1].value = bid;
                    input.trigger('input'); // Use for Chrome/Firefox/Edge
                    input.trigger('change'); // Use for Chrome
                    document.getElementsByClassName("ask-button")[0].click();

                },
                sell: function(price, bid) {
                    var input = $('input');
                    input[2].value = price;
                    input[3].value = bid;
                    input.trigger('input'); // Use for Chrome/Firefox/Edge
                    input.trigger('change'); // Use for Chrome
                    document.getElementsByClassName("ask-button")[1].click();

                }
            },
            ether: {},
            bitcoin: {}
        }
    }
    var busniessLogic = {
        defaultTrading: {
            //var a :1,
            watchAndRun : function(){
                console.log("watchAndRun");
            },
            startBid : function(){
                if (config.currentBid > config.totalBids) {
                    return;
                }
                console.log("=============================| Start bid = " + config.currentBid + " |======================")
                //config.intervalID = setInterval(this.watchAndRun.bind(tradingEngine), config.startNextBiddingInterval);
                config.currentBid++;

            },
            stopBid : function(){
                clearInterval(config.intervalID);

            }       
            

        }

    }
    
    var tradingEngine = {
        config : config,
        exchange : exchange,
        startBid : busniessLogic.defaultTrading.startBid,
        stopBid : busniessLogic.defaultTrading.stopBid,
    }
    console.log(tradingEngine);
    return tradingEngine;

})(window)


/*
var el= document.createElement('script');
//el.src="http://localhost/hackathon/AutoClick/smartclick.js";
 el.src = "//dl.dropboxusercontent.com/s/rqkvk96g7xaky7m/smartclick.js";
document.body.appendChild(el)
*/
