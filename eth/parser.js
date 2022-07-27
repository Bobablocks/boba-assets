const testFolder = './assets';
const fs = require('fs');

var obj = {
    tokenlist: []
};

var temp = [];

var json = JSON.stringify(obj);

fs.readdirSync(testFolder).forEach(file => {
    temp.push(file);
});

for (var i = 0; i < temp.length; i++) {

    var v = JSON.parse(fs.readFileSync(testFolder + '/' + temp[i] + '/info.json', 'utf8'));
    if (v['id'] == '0xB8c77482e45F1F44dE1745F52C74426C631bDD52') {
        obj.tokenlist.push({
            'symbol': 'BNB',
            'name': 'Binance Coin',
            'address': v['id'],
        })
    } else if (v['id'] == '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599') {
        obj.tokenlist.push({
            'symbol': 'BTC',
            'name': 'Bitcoin',
            'address': v['id'],
        })
    } else if (v['id'] == '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') {
        obj.tokenlist.push({
            'symbol': 'ETH',
            'name': 'Ethereum',
            'address': v['id'],
        })
    } else if (v['id'] == '0xdAC17F958D2ee523a2206206994597C13D831ec7') {
        obj.tokenlist.push({
            'symbol': 'USDT',
            'name': 'Tether USD',
            'address': v['id'],
        })
    } else {
        obj.tokenlist.push({
            'symbol': v['symbol'],
            'name': v['name'],
            'address': v['id'],
        })
    }

}
// obj.tokenlist.splice(obj.tokenlist.findIndex(x => x.address == "0x3AefF4E27E1F9144eD75Ba65a80BdfEE345F413e"), 1)
// obj.tokenlist.splice(0, 0, {
//     'symbol': 'BUMN',
//     'name': 'BUMooN',
//     'address': '0x3AefF4E27E1F9144eD75Ba65a80BdfEE345F413e',
// });

console.log(obj)
var json = JSON.stringify(obj);
fs.writeFile('tokenlist.json', json, 'utf8', function (a) { });