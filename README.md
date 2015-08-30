# shapeshiftio-node
nodejs API for shapeshift.io

### Installation

```
npm install shapeshiftio
```

### Instance

```
var shapeshift = require('shapeshiftio');
```
### Usage

```
shapeshift.method(<args>).then(function(response) {
		//Results here
	});
```

### Methods
Refer to the [shapeshift API](https://shapeshift.io/api) to know about each output and explanation
```
getRate(pair) - Rate (https://shapeshift.io/api#api-2)
getDepositLimit(pair) - Deposit Limit (https://shapeshift.io/api#api-3)
getMarketInfo(pair) - Market Info (https://shapeshift.io/api#api-103)
getRecentTransaction(max) - Recent Transaction List (http//shapeshift.io/api#api-4)
getDepositStatus(address) - Status of deposit to address (https://shapeshift.io/api#api-5)
getRemainingTime(address) - Time Remaining on Fixed Amount Transaction (https://shapeshift.io/api#api-6)
getCoinsList() - Get List of Supported Coins with Icon Links (https://shapeshift.io/api#api-104)
getTransactionsListApi(apikey) - Get List of Transactions with a PRIVATE API KEY (https://shapeshift.io/api#api-105)
getTransactionsListAddress(address, apikey) - Get List of Transactions with a Specific Output Address (https://shapeshift.io/api#api-106)
validateAddress(address, coinsymbol) - Validate an address, given a currency symbol and address (https://shapeshift.io/api#api-107)
transaction(withdrawal, pair, returnAddress) - Normal Transaction (https://shapeshift.io/api#api-7)
requestReceipt(email, txId) - Request Email Receipt (https://shapeshift.io/api#api-8)
fixedTransaction(amount, pair, withdrawal, returnAddress) - Fixed Amount Transaction (https://shapeshift.io/api#api-9)
fixedTransaction(amount, pair) - Quote Send Exact Price (https://shapeshift.io/api#api-9)
cancelTransaction(address) - Cancel Pending Transaction (https://shapeshift.io/api#api-108)
```

### Development

Feel free to fork from [shapeshiftio-node](https://github.com/sgsshankar/shapeshiftio-node)

### Issues

https://github.com/sgsshankar/shapeshiftio-node/issues
