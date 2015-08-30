var express = require('express');
var shapeshift = require('./shapeshiftio');

var app = express();
var port = 3000;

app.get('/', function(req, res) {
	res.send("Express app for shapeshift api ");
});

app.get('/rate/:pair', function(req, res) {
	var response = shapeshift.getRate(req.params.pair).then(function(response) {
		res.send(response);
	});
});

app.get('/limit/:pair', function(req, res) {
	var response = shapeshift.getDepositLimit(req.params.pair).then(function(response) {
		res.send(response);
	});
});

app.get('/marketInfo/:pair', function(req, res) {
	var response = shapeshift.getMarketInfo(req.params.pair).then(function(response) {
		res.send(response);
	});
});

app.get('/recenttx/:max', function(req, res) {
	var response = shapeshift.getRecentTransaction(req.params.max).then(function(response) {
		res.send(response);
	});
});

app.get('/txStat/:address', function(req, res) {
	var response = shapeshift.getDepositStatus(req.params.address).then(function(response) {
		res.send(response);
	});
});

app.get('/timeremaining/:address', function(req, res) {
	var response = shapeshift.getRemainingTime(req.params.address).then(function(response) {
		res.send(response);
	});
});

app.get('/getcoins', function(req, res) {
	var response = shapeshift.getCoinsList().then(function(response) {
		res.send(response);
	});
});

app.get('/txbyapikey/:apikey', function(req, res) {
	var response = shapeshift.getTransactionsListApi(req.params.apikey).then(function(response) {
		res.send(response);
	});
});

app.get('/txbyaddress/:address/:apikey', function(req, res) {
	var response = shapeshift.getTransactionsListAddress(req.params.address, req.params.apikey).then(function(response) {
		res.send(response);
	});
});

app.get('/validateAddress/:address/:coinsymbol', function(req, res) {
	var response = shapeshift.validateAddress(req.params.address, req.params.coinsymbol).then(function(response) {
		res.send(response);
	});
});

app.get('/shift/:withdrawal/:pair/:returnAddress', function(req, res) {
	var response = shapeshift.transaction(req.params.withdrawal, req.params.pair, req.params.returnAddress).then(function(response) {
		res.send(response);
	});
});

app.get('/mail/:email/:txId', function(req, res) {
	var response = shapeshift.requestReceipt(req.params.email, req.params.txId).then(function(response) {
		res.send(response);
	});
});

app.get('/sendamount/:amount/:pair/:withdrawal/:returnAddress/', function(req, res) {
	var response = shapeshift.fixedTransaction(req.params.amount, req.params.pair, req.params.withdrawal, req.params.returnAddress).then(function(response) {
		res.send(response);
	});
});

app.get('/sendamount/:amount/:pair', function(req, res) {
	var response = shapeshift.fixedTransaction(req.params.amount, req.params.pair).then(function(response) {
		res.send(response);
	});
});

app.get('/cancelpending/:address', function(req, res) {
	var response = shapeshift.cancelTransaction(req.params.address).then(function(response) {
		res.send(response);
	});
});

var server = app.listen(port, function() {
	console.log("open browser to http://localhost:3000/");
});