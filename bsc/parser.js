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
    if (v['id'] == '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c') {
        obj.tokenlist.push({
            'symbol': 'BNB',
            'name': 'Binance Coin',
            'address': v['id'],
        })
    } else if (v['id'] == '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c') {
        obj.tokenlist.push({
            'symbol': 'BTC',
            'name': 'Bitcoin',
            'address': v['id'],
        })
    } else if (v['id'] == '0x2170Ed0880ac9A755fd29B2688956BD959F933F8') {
        obj.tokenlist.push({
            'symbol': 'ETH',
            'name': 'Ethereum',
            'address': v['id'],
        })
    } else if (v['id'] == '0x55d398326f99059fF775485246999027B3197955') {
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