var unirest = require("unirest");
var querystring = require("querystring");
var config = require('./config');
var Promise = require('promise/domains');

module.exports = {

	getRate: function(pair) {
		var pair = config.config.rate + pair;
		var result = sendRequest(pair, 'GET', {});
		return result;
	},

	getDepositLimit: function(pair) {
		var pair = config.config.depositLimit + pair;
		var result = sendRequest(pair, 'GET', {});
		return result;
	},

	getMarketInfo: function(pair) {
		var pair = config.config.marketInfo + pair;
		var result = sendRequest(pair, 'GET', {});
		return result;
	},

	getRecentTransaction: function(max) {
		var max = config.config.recentTx + max;
		var result = sendRequest(max, 'GET', {});
		return result;
	},

	getDepositStatus: function(address) {
		var address = config.config.depositStatus + address;
		var result = sendRequest(address, 'GET', {});
		return result;
	},

	getRemainingTime: function(address) {
		var address = config.config.timeRemaining + address;
		var result = sendRequest(address, 'GET', {});
		return result;
	},

	getCoinsList: function() {
		var result = sendRequest(config.config.supportedCoins, 'GET', {});
		return result;
	},

	getTransactionsListApi: function(apikey) //Private Key
		{
			var apikey = config.config.transactionsListApi + apikey;
			var result = sendRequest(apikey, 'GET', {});
			return result;
		},

	getTransactionsListAddress: function(apikey, address) //Private Key
		{
			var address = config.config.transactionsListAddress + address + apikey;
			var result = sendRequest(address, 'GET', {});
			return result;
		},

	validateAddress: function(address, coinsymbol) {
		var address = config.config.validateAddress + address + coinsymbol;
		var result = sendRequest(address, 'GET', {});
		return result;
	},

	transaction: function(withdrawal, pair, returnAddress) {
		var url = config.config.transaction;
		var request = {
			"withdrawal": withdrawal,
			"pair": pair,
			returnAddress: returnAddress,
			apikey: config.config.apiKey
		};
		var result = sendRequest(url, 'POST', request);
		return result;
	},

	requestReceipt: function(email, txId) {
		var url = config.config.receipt;
		var request = {
			"email": email,
			"txid": txId
		};
		var result = sendRequest(url, 'POST', request);
		return result;
	},

	fixedTransaction: function(amount, pair, withdrawal, returnAddress) {
		var url = config.config.fixedTransaction;
		var request = {
			"amount": amount,
			"withdrawal": withdrawal,
			"pair": pair,
			returnAddress: returnAddress,
			apiKey: config.config.apiKey
		};
		var result = sendRequest(url, 'POST', request);
		return result;
	},

	cancelTransaction: function(address) {
		var url = config.config.cancelTransaction;
		var request = {
			"address": address
		};
		var result = sendRequest(url, 'POST', request);
		return result;
	}

};

function sendRequest(fullpath, method, querystring) {

	var options = {
		url: config.config.hostUrl + fullpath,
		qs: querystring,
		method: method,
		headers: {
			'Content-Type': 'application/json',
			'User-Agent': 'shapeshift',
			'Accept': 'application/json'
		}
	};

	return new Promise(function(resolve, reject) {
		if (method == "GET") {
			unirest.get(options.url)
				.headers(options.headers)
				.send(options.qs)
				.end(function(response) {
					resolve(response.body);
				});
		} else if (method == "POST") {
			unirest.post(options.url)
				.headers(options.headers)
				.send(options.qs)
				.end(function(response) {
					resolve(response.body);
				});

		}
	});

}